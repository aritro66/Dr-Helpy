import React from "react";

export default function Navbar({ styles }) {
  return (
    <header className={styles.header}>
      <div className={styles["header-1"]}>
        <a href="#" className={styles.logo}>
          {" "}
          <i className="fa fa-heartbeat"></i> Dr. Helpy
        </a>

        <div className={styles.icons}>
          <div id={styles["search-btn"]} className="fas fa-search"></div>

          <a href="#" className=""></a>
          <a href="/addtocart" className="bi bi-cart3">
            <span id={styles["cartno"]}></span>
          </a>
          <div className={styles.dropdown} style={{ display: "inline" }}>
            <a
              href="#"
              className="bi bi-person-circle"
              id={styles.toggleclick}
            ></a>
            <div className={styles["dropdown-content"]}>
              <a href="/myaccount">My Acount</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["header-2"]}>
        <nav className={styles.navbar}>
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
