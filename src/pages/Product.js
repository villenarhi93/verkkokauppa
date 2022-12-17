import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Product({url, addToCart}) {
  const [product, setProduct] = useState(null);

  let params = useParams();
  
  useEffect(() => {
    axios.get(url + 'products/getproduct.php/' + params.productId)
      .then((response) => {
        const json = response.data;
        setProduct(json.product);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (
    <div className="container">
      <h3>{product?.nimi}</h3>
      <h4>{product?.hinta} €</h4>
      <p>{product?.tuotekuvaus}</p>
      <button className='btn btn-outline-dark mt-auto' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
      
      <span className="homespan">
        <Link to={"/products/" + product?.kategoria_id} className="btn btn-outline-dark mt-auto">Näytä tuoteryhmä</Link>
      </span>
    </div>
  )
}