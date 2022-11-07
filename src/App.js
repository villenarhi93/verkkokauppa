import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Home />
    <Footer />
    </>
  );

  
}

export default App;
