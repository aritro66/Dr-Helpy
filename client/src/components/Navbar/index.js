import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-1">
        <a href="#" className="logo">
          {" "}
          <i className="fa fa-heartbeat"></i> Dr. Helpy
        </a>

        <div className="icons">
          <div id="search-btn" className="fas fa-search"></div>

          <a href="#" className=""></a>
          <a href="/addtocart" className="bi bi-cart3">
            <span id="cartno"></span>
          </a>
          <div className="dropdown" style={{ display: "inline" }}>
            <a href="#" className="bi bi-person-circle" id="toggleclick"></a>
            <div className="dropdown-content">
              <a href="/myaccount">My Acount</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-2">
        <nav className="navbar">
          <a href="/home">home</a>
          <a href="#featured">featured</a>
          <a href="#reviews">reviews</a>
          <a href="#consultation">consultation</a>
          <a href="/disease">disease</a>
        </nav>
      </div>
    </header>
  );
}
