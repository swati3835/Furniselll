import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link className="link" to="/">
        <h1 className="header-logo">Furnisell</h1>
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link className="link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-options">
            <span className="options-line-one">Hello, Guest!</span>
            <span className="options-line-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-options">
          <span className="options-line-one">Returns</span>
          <span className="options-line-two">& orders</span>
        </div>
        <Link className="link" to="/checkout">
          <div className="header-cart">
            <ShoppingCartIcon />
            <span className="options-line-two header-cart-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
