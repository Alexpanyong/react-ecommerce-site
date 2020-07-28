import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";
import { pageNames } from "../../shared/config/pageNames";
import { routerPathNames } from "../../shared/config/routerPathNames";
import TopbarNav from "../../components/TopbarNav/TopbarNav";

const TopBar = (props) => {
  const { currentPage, selectedBook, cart, handleSetCurrentPage, showMobileMenu, toggleMobileMenu, handleGoToHomepage } = props;

  useEffect(() => {
    /** Initial menu highlight * */
    switch (window.location.pathname) {
      case routerPathNames.Home:
        handleSetCurrentPage(pageNames.Home);
        break;
      case routerPathNames.SelectedBook:
        handleSetCurrentPage(pageNames.SelectedBook);
        break;
      case routerPathNames.MyOrders:
        handleSetCurrentPage(pageNames.MyOrders);
        break;
      case routerPathNames.Cart:
        handleSetCurrentPage(pageNames.Cart);
        break;
      default:
        break;
    }
    return () => {};
  }, []);

  return (
    <div className="topBarWrap">
      <div className="logo">
        <Link className="logoLink" to={routerPathNames.Home} onClick={handleGoToHomepage} >
          eCommerce Site
        </Link>
      </div>
      <div className="selectedBookTitle">{`${selectedBook ? `${selectedBook.title}` : ""}`}</div>
      <TopbarNav 
        currentPage={currentPage} 
        cart={cart} 
        handleSetCurrentPage={handleSetCurrentPage} 
        showMobileMenu={showMobileMenu} 
        toggleMobileMenu={toggleMobileMenu} 
      />
    </div>
  );
};

export default TopBar;
