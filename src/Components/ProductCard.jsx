import "./ProductCard.css"

export default function ProductCard({product, addToCart}){
    return(
        <div className="product-card">
            <img className="product-img" src={product.image}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>⭐ {product.rating}</p>
            <button className="cart-button" onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
    )
}