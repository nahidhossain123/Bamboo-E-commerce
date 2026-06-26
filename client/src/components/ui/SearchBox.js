import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({
  placeholder = "Search...",
  onSearch,
}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);

    if (onSearch) {
      onSearch(text);
    }
  };

  const clearSearch = () => {
    setValue("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="search-box">
      <span className="search-icon">&#128269;</span>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />

      {value && (
        <button
          className="clear-btn"
          onClick={clearSearch}
          aria-label="Clear search"
        >
          &times;
        </button>
      )}
    </div>
  );
}