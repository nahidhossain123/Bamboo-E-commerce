import { useState } from "react";
import "./CartStyle.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 149,
      quantity: 1,
      image: "https://picsum.photos/120?1",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89,
      quantity: 2,
      image: "https://picsum.photos/120?2",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 59,
      quantity: 1,
      image: "https://picsum.photos/120?3",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <h2>Your cart is empty.</h2>
          ) : (
            cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>

                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button onClick={() => (window.location.href = "/checkout")} className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}