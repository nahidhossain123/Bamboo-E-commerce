import "./OrderSummary.css";
export default function OrderSummary() {
  return (
    <div className="summary">

      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>$267</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span>$10</span>
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <span>$277</span>
      </div>

      <button className="checkout-btn">
        Place Order
      </button>

    </div>
  );
}