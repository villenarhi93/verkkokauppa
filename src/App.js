import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from './components/Cart';
import Products from './pages/Products';
import Product from './pages/Product';
import Home from "./pages/Home";
import About from "./pages/About";
import Order from './pages/Order';
import React, {useState, useEffect } from "react";


const URL = 'http://localhost/VPP_backend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  
  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    }
    else {
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function removeFromCart (product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
}

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  return (
    <>
    <Navbar url={URL} cart={cart}/>
    <Header />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path="/search/:searchPhrase" element={<Products url={URL} />} />
        <Route path="/product/:productId" element={<Product url={URL} addToCart={addToCart}/>} />
        <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart}/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );

  
}

export default App;
