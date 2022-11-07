import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './components/Main';


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Main />
    <Footer />
    </>
  );

  
}

export default App;
