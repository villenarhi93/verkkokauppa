import React from "react";
import uuid from "react-uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Order({cart}) {
    let sum = 0;

    return (
        <>
    <Navbar />
        <div>
            <h3 className="header">Tuotteet ostoskorissa</h3>
            <table className="table">
                <tbody>
                    {cart.map(product => {
                        sum+=parseFloat(product.price)
                        return (
                            <tr key={uuid()}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>   
    <Footer />   
        </>
    )
}
