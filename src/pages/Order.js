import React, { useState, useEffect, createRef } from "react";
import uuid from "react-uuid";
import axios from "axios";

const url = 'http://localhost/VPP_backend/';

export default function Order({cart, removeFromCart, updateAmount}) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

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
    
    function changeAmount(e,product,index) {
        updateAmount(e.target.value,product);
        setInputIndex(index);
    }

    let sum = 0;

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [finished, setFinished] = useState([])
    const [empty, setEmpty] = useState();

    function order(e) {
        e.preventDefault();
        
        const json = JSON.stringify({
            fname: firstname,
            lname: lastname,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        });
        axios.post(url + 'order/save.php', json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            empty();
            setFinished(true);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }

    return (
    <>
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
                        <td>Loppusumma</td>
                        <td>{sum.toFixed(2)}</td>
                        <td></td>
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
                        <button className="btn btn-primary">Tilaa</button>
                    </div>
                </form>
                </>
                }
        </div>   

    
        
    </>
    )
}
