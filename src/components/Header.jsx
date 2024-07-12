
import React, { useState } from "react";

const Header = ({ cartItemCount, setView, hasNotifications }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <header className="header" >
      <div className="header-left">
        <h1 onClick={() => setView("products")}>Viva Clothes</h1>
      </div>
      <div className="header-right">
        <div className="header-selectors">
          <select className="header-select">
            <option value="">BABIES</option>
            <option value="electronics">T-SHIRTS</option>
            <option value="clothing">SHIRTS</option>
            <option value="books">PANTS</option>
          </select>
          <select className="header-select">
            <option value="">BOYS</option>
            <option value="price-low-high">T-SHIRTS</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">PANTS</option>
          </select>
          <select className="header-select">
            <option value="">GIRLS</option>
            <option value="in-stock">T-SHIRTS</option>
            <option value="on-sale">SHIRTS</option>
            <option value="new-arrivals">PANTS</option>
          </select>
        </div>
        <div className="header-icons">
          <div className="icon user-icon">👤</div>
          <div className="icon love-icon">❤️</div>
          <div className="search-container">
            <div className={`search-bar ${isSearchExpanded ? "expanded" : ""}`}>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="icon search-icon" onClick={toggleSearch}>
              🔍
            </div>
          </div>
          <div className="icon cart-icon" onClick={() => setView("cart")}>
            🛒 <span className="cart-count">{cartItemCount}</span>
          </div>
          <div
            className={`icon notifications-icon ${
              hasNotifications ? "has-notifications" : ""
            }`}
            onClick={() => setView("notifications")}
          >
            🔔
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
