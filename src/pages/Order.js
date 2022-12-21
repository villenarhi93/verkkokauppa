import React, { useState, useEffect, createRef } from "react";
import uuid from "react-uuid";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Order({url, cart, removeFromCart, updateAmount}) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [finished, setFinished] = useState(false)


    useEffect(() => {
      for (let i = 0;i<cart.length;i++) {
        inputs[i] = React.createRef();
      }
    }, [cart.length,inputs])

    useEffect(() => {
      if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
        inputs[inputIndex].current.focus();
      }
    }, [cart,inputs,inputIndex])
    
    function order(e) {
        e.preventDefault();
        
        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        });
        axios.post(url + 'order/save.php',json,{
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            setFinished(true);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    function changeAmount(e,product,index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    }

    let sum = 0;

    if (finished === false) { 
    return (
        <div>
            <h3 className="header">Tuotteet ostoskorissa</h3>
            <table className="table">
                <tbody>
                    {cart.map((product, index) => {
                        sum+=parseFloat(product.hinta*product.amount)
                        return (
                            <tr key={uuid()}>
                                <td>{product.nimi}</td>
                                <td>{product.hinta} €</td>
                                <td>
                                    <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e, product, index)} />
                                </td>
                                <td><a href="#" onClick={() => removeFromCart(product)}>Poista</a></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)} €</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            {cart.length > 0 &&
                <>
                <h3 className="header">Tilaajan tiedot</h3>
                <form onSubmit={order}>
                    <div className="form-group">
                        <label>Etunimi:</label>
                        <input className="form-control" onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Sukunimi:</label>
                        <input className="form-control" onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Sähköposti:</label>
                        <input className="form-control" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Osoite:</label>
                        <input className="form-control" onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Postinumero:</label>
                        <input className="form-control" onChange={e => setZip(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Postitoimipaikka:</label>
                        <input className="form-control" onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div className="button">
                         <button className='btn btn-primary'>Tilaa</button>                   
                    </div>
                </form>
                </>
                }
        </div>
        )
    } else {
        return (<h3>Kiitos tilauksestasi!</h3>);
    }
}