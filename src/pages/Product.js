import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';

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
    <>
    <div className="row">
        <div className="col-md-6" >
              <div>
                <Link className="btn btn-outline-dark mt-auto" type="button" to={"/products/" + product?.kategoria_id}>Palaa tuoteryhmän sivulle</Link>
              </div>
              <h3 id="hnimi">{product?.nimi}</h3>
              <img src={"../image/" + product?.kategoria_id + "/" + product?.id + ".jpg"} className="img-card-top" alt="Tuotekuva" />
              
          </div>
            <div className="col-md-6" >
              <h4 id="htuotekuvaus">Tuotekuvaus</h4>
              <div>{product?.tuotekuvaus}</div>
              <h4 className="htuote">Tuotekoodit</h4>
              <div>{product?.tuotekuvaus}</div>
              <h4 className="htuote">{product?.hinta} €</h4>
              <button className='btn btn-outline-dark mt-auto htuote' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
          </div>
    </div>
     
     
   </>
  )
 
}