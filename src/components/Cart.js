import React from 'react';
import { Link } from "react-router-dom";

export default function Cart({cart}) {
    return (
        <>
        <Link to="/order">
        <span>{cart.length}</span>
        </Link>
        </>
    )
}