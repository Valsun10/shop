import React from "react";
import "./Navbar.scss";
import emptycartIMG from "../../assets/navbar-images/emptycart.png";
import emptyHeartIMG from "../../assets/navbar-images/emptyheart.png";
import user from "../../assets/navbar-images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../Auth/authSlice";

const Navbar = () => {
  const userName = localStorage.getItem("username");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("username");
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Exclusive</h1>
      </div>
      <div className="navbar-links">
        {!userName ? (
          <Link to="/login" className="link">
            Log in
          </Link>
        ) : (
          <>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/shop" className="link">
              Shop
            </Link>
          </>
        )}
      </div>
      <div className="navbar-cart">
        {userName ? (
          <div className="user-logged-in">
            <img src={user} alt="profile image" style={{ height: "35px" }} />
            <p>{userName}</p>
            <button onClick={handleLogOut}>Log out</button>
          </div>
        ) : (
          <></>
        )}
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
