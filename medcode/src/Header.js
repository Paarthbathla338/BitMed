import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://medicalaid.org/wp-content/uploads/sb-instagram-feed-images/internationalmedicalaid.jpg" alt="" />

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineOne">Hello Guest, </span>
          <span className="header_optionlineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Returns </span>
          <span className="header_optionlineTwo"> & Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Get </span>
          <span className="header_optionlineTwo">Vaccinated</span>
        </div>
      </div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon/>
        <span className="header_optionlineTwo header_basketCount">0</span>
  
      </div>

    </div>
  );
}

export default Header;
