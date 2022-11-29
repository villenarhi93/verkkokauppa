import axios from "axios";
import React, {useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Cart from "./Cart";

const url="http//:localhost/VPP_backend/"


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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Verkkokauppa</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#!"></a>
                        <Link className="nav-link" to="/">Etusivu</Link>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#!"></a>
                        <Link className="nav-link" to="/about">Tietoja</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kauppa</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {categories.map(category => (
                            <li>
                                <Link
                                className="dropdown-item"
                                to={'/products/' + category.id}>{category.nimi}
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
                    placeholder="Hae..."
                    aria-label="Search" />
                </form>
                <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        <Cart cart={cart} />
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    )
}