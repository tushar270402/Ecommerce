import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar({cartCount}){
    return(
        <div className="navbar">
            <img className="navbar-logo" src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689615579/catalog/1680994206333120512/mxpphssqkswp3nd08dhy.jpg" alt="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/cart">🛒({cartCount})</Link></li>
            </ul>
        </div>
    )
}