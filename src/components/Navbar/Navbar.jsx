import React from "react";
import "./Navbar.scss";
import emptycartIMG from "../../assets/navbar-images/emptycart.png";
import emptyHeartIMG from "../../assets/navbar-images/emptyheart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Exclusive</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
        <Link className="link">Contact</Link>
      </div>
      <div className="navbar-cart">
        <img
          src={emptyHeartIMG}
          alt="liked clothes"
          style={{ height: "35px" }}
        />
        <img src={emptycartIMG} alt="cart" style={{ height: "35px" }} />
      </div>
    </div>
  );
};

export default Navbar;
