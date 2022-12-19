import axios from "axios";
import React, {useState, useEffect, createRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Cart from "./Cart";
import '../App.css';
import uuid from "react-uuid";
import Order from "../pages/Order"

export default function Navbar({url, cart}) {
<Order />
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

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

useEffect(() => {
    for (let i = 0;i<cart.length;i++) {
      inputs[i] = createRef();
    }
  }, [cart.length])

  useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  }, [cart])
  
  
  let sum = 0;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <div>
            <Link to="/"> <img src="./images/logo.png" className="logo" alt="Living Tech logo"></img></Link>
            </div>
            <a className="navbar-brand" href="#!"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Etusivu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Tietoja</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Ylläpito</Link>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
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
                    onKeyDown={(e) => executeSearch(e)}
                    className="form-control"
                    type="search"
                    placeholder="Hae..."
                    aria-label="Search" />
                </form>
                <li className="nav-item dropdown"><a className="nav-link dropdown" id="navbarDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src='./images/cart.jpg' id='cartnavbar'></img>
                <span>{cart.length}</span></a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                            <h3 className="header">Ostoskori</h3>
                                <table className="table">
                                    <tbody>
                                        {cart.map((product, index) => {
                                            sum+=parseFloat(product.hinta*product.amount)
                                            return (
                                                <tr key={uuid()}>
                                                    <td>{product.nimi}</td>
                                                    <td>{product.hinta} €</td>
                                                    <td>
                                                        <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} />
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        <Cart className="btn btn-outline-dark" id="cart" cart={cart}>Tilaamaan</Cart>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </li>
            </div>
        </div>
    </nav>
    )
}