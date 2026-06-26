import { useEffect, useState } from "react";
import "./AddressCard.css";

export default function AddressCard({
  address,
  active,
  onSelect,
}) {
  return (
    <div
      className={`address-card ${
        active ? "active" : ""
      }`}
      onClick={onSelect}
    >
      <input
        type="radio"
        checked={active}
        readOnly
      />

      <div>

        <h4>{address.fullName}</h4>

        <p>{address.phone}</p>

        <p>
          {address.address}, {address.city}
        </p>

        <p>
          {address.state}, {address.country}
        </p>

      </div>

    </div>
  );
}