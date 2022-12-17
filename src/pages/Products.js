import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Products({url,addToCart}) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
            .then((response) => {
                const json = response.data;
                setCategoryName(json.category);
                setProducts(json.products);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])

    return (

        <div className="container">
            
            <h3>Tuoteryhmän {categoryName} tuotteet</h3>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"></div>
                    {products.map(product => (
                        <div key={product.id}>
                            <img className="card-img-top" src={product.kuva} alt="Tuotekuva" />
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <div className="card-body p-4">

                                        <div className="text-center"></div>
                                            <h4 className="fw-bolder">
                                                <Link to={'/product/' + product.id}>{product.nimi}</Link>
                                            </h4>
                                            <h5 className="fw-bolder">{product.hinta} €</h5>
                                        <div class="collapse" id="collapseExample">
                                        <div class="card card-body">
                                        </div>
                                        </div>
                                        
                                        <Link to={'/product/' + product.id}><button className="btn btn-outline-dark mt-auto" type="button">Lue lisää</button></Link>
                                        <button className="btn btn-outline-dark mt-auto" type="button" id="addcart" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>       
        </div>
        
    )
}