import React, { Fragment } from "react";
import "./TopbarNav.scss";
import { Link } from "react-router-dom";
import { pageNames } from "../../shared/config/pageNames";

const TopbarNav = ({ currentPage, cart, handleSetCurrentPage, showMobileMenu, toggleMobileMenu }) => {
  return (
    <Fragment>
      <nav className="topBarNav">
        <div className="mobileMenuButton" onClick={toggleMobileMenu}>
          <div className="mobileMenuIcon">
            <div className="iconStroke" id="stroke01"></div>
            <div className="iconStroke" id="stroke02"></div>
          </div>
          {cart.length > 0 && <span className="cartItemsNumber" id="cartIndicatorMobile">{cart.length}</span>}
        </div>
        <ul className={showMobileMenu ? "mobileMenu" : ""} id="mobileMenu">
          <li
            id="home"
            className={`navItem ${
              currentPage === pageNames.Home ? "highlighted" : ""
            }`}
            onClick={() => handleSetCurrentPage(pageNames.Home)}
          >
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li
            id="myOrders"
            className={`navItem ${
              currentPage === pageNames.MyOrders ? "highlighted" : ""
            }`}
            onClick={() => {
              handleSetCurrentPage(pageNames.MyOrders);
              if (showMobileMenu) {
                toggleMobileMenu();
              }
            }}
          >
            <Link className="navLink" to="/myorders">
              My Orders
            </Link>
          </li>
          <li
            id="cart"
            className={`navItem ${
              currentPage === pageNames.Cart ? "highlighted" : ""
            }`}
            onClick={() => {
              handleSetCurrentPage(pageNames.Cart);
              if (showMobileMenu) {
                toggleMobileMenu();
              }
            }}
          >
            <Link className="navLink" to="/cart">
              Cart
              {cart.length > 0 && <span className="cartItemsNumber">{cart.length}</span>}
            </Link>
          </li>
        </ul>
        
      </nav>
    </Fragment>
  )
}

export default TopbarNav;
