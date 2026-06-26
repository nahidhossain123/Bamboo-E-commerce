import { useState } from "react";
import "./AddressForm.css";
export default function AddressForm({
  onSave,
  onCancel,
}) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  });

  const change = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const submit = (e) => {
    e.preventDefault();

    onSave({
      id: Date.now(),
      ...form,
    });
  };

  return (
    <form
      className="address-form"
      onSubmit={submit}
    >
      <input
        name="fullName"
        placeholder="Full Name"
        onChange={change}
        required
      />

      <input
        name="email"
        placeholder="Email"
        onChange={change}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={change}
        required
      />

      <input
        name="address"
        placeholder="Street Address"
        onChange={change}
        required
      />

      <div className="grid-2">

        <input
          name="city"
          placeholder="City"
          onChange={change}
          required
        />

        <input
          name="zip"
          placeholder="ZIP"
          onChange={change}
          required
        />

      </div>

      <div className="grid-2">

        <input
          name="state"
          placeholder="State"
          onChange={change}
          required
        />

        <input
          name="country"
          placeholder="Country"
          onChange={change}
          required
        />

      </div>

      <div className="btn-group">

        <button type="submit">
          Save Address
        </button>

        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>

      </div>

    </form>
  );
}