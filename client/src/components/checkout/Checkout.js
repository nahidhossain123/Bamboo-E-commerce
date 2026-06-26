import { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";
import "./Checkout.css";


export default function Checkout() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("addresses")) || [];

    setAddresses(saved);

    if (saved.length) {
      setSelectedAddress(saved[0]);
    } else {
      setShowForm(true);
    }
  }, []);

  const saveAddress = (address) => {
    const updated = [...addresses, address];

    localStorage.setItem(
      "addresses",
      JSON.stringify(updated)
    );

    setAddresses(updated);
    setSelectedAddress(address);
    setShowForm(false);
  };

  return (
    <div className="checkout-page">

      <div className="checkout-left">

        <h2>Shipping Address</h2>

        {!showForm &&
          addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              active={selectedAddress?.id === address.id}
              onSelect={() => setSelectedAddress(address)}
            />
          ))}

        {!showForm && (
          <button
            className="add-address-btn"
            onClick={() => setShowForm(true)}
          >
            + Add New Address
          </button>
        )}

        {showForm && (
          <AddressForm
            onSave={saveAddress}
            onCancel={() => setShowForm(false)}
          />
        )}

      </div>

      <OrderSummary />

    </div>
  );
}