import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";

export default function Home({addToCart}){
    return(
        <>
            <ProductList addToCart = {addToCart}/>
        </>
    )
}