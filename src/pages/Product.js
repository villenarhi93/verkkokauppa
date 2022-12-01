import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({url}) {
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
    <div>
      <h3>{product?.nimi}</h3>
      <p>{product?.hinta}</p>
    </div>
  )
}