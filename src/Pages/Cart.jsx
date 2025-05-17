export default function Cart({ items, removeFromCart }) {
    // Calculate total price
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Your Cart</h1>
  
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px"}}>
                    <img src={item.image} alt={item.name} width="100" />
                    <div>
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
  
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        )}
      </div>
    );
  }
  