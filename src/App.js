import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from './pages/Cart';


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    <Footer />
    </>
  );

  
}

export default App;
