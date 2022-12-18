import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default function Cart({cart}) {
    return (
        <>
        <Link to="/order" className="btn btn-outline-dark mt-auto">
            Tilaamaan
        </Link>
        </>
    )
}