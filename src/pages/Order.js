import React from "react";

export default function Order({cart}) {
    let sum = 0;

    return (
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>      
    )
}
