import { Routes, Route, useSearchParams } from "react-router-dom"
import { useState } from "react"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import ProductList from "./Components/ProductList"
import Footer from "./Components/Footer"

function App(){

  const [cartItems, setCartitems] = useState([])

  const handleAddtocart = (product)=>{
    setCartitems(prevItems => [...prevItems, product])
  }

  const handleRemoveFromCart = (index) => {
    setCartitems((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  return (
    <>
      <Navbar cartCount = {cartItems.length}/>
      <Routes>
        <Route path="/" element={<Home addToCart={handleAddtocart}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart items={cartItems}  removeFromCart={handleRemoveFromCart}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
