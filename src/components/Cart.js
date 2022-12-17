import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default function Cart({cart}) {
    return (
        <>
        <Link to="/order">
            <img src='./images/cart.jpg' id='cartnavbar'></img>
            <span>{cart.length}</span>
        </Link>
        </>
    )
}