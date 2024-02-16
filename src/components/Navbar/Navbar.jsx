import React from "react";
import "./Navbar.scss";
import cartIMG from "../../assets/navbar-images/empty-cart.png";
import emptyHeartIMG from "../../assets/navbar-images/emptyheart.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Exclusive</h1>
      </div>
      <div className="navbar-links">
        <p>Home</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
      <div className="navbar-cart">
        <img
          src={emptyHeartIMG}
          alt="liked clothes"
          style={{ height: "35px" }}
        />
        <img src={cartIMG} alt="cart" style={{ height: "35px" }} />
      </div>
    </div>
  );
};

export default Navbar;
