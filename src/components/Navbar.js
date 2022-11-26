import axios from "axios";
import React, {useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Cart from "./Cart";

const url = 'http://localhost:3000';


export default function Navbar({url, cart}) {

const [categories, setCategories] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
    console.log(url);
    axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            setCategories(json);
            console.log(json);
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
}, []
)

function executeSearch(e) {
    if (e.charCode === 13) {
        e.preventDefault();
        Navigate('/search/' + search);
    }
}

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">Verkkokauppa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">
                        <Link className="nav-link" to="/home">Etusivu</Link>
                    </a></li>
                    <li class="nav-item"><a class="nav-link" href="#!">
                        <Link className="nav-link" to="/about">Tietoja</Link>
                    </a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kauppa</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {categories.map(category => (
                            <li>
                                <Link
                                className="dropdown-item"
                                to={'/products/' + category.id}>{category.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <form className="form-inline">
                    <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => executeSearch(e)}
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                </form>
                <form class="d-flex">
                    <button class="btn btn-outline-dark" type="submit">
                        <i class="bi-cart-fill me-1"></i>
                        <Cart cart={cart} />
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    )
}