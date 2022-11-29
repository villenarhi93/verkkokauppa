import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {  useParams } from 'react-router-dom';

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
        <div>
            <h3>Tuoteryhmän '{categoryName}' tuotteet</h3>
            {products.map(product => (
                <div key={product.id}>
                    {product.nimi}
                    <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää koriin</button>
                </div>
            ))}
        </div>
    )
    
}
