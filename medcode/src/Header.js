import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider"


function Header() {
  const [{basket},dispatch]=useStateValue()


  return (
    <div className="header">
    <Link to="/">
    <img className="header_logo" src="https://medicalaid.org/wp-content/uploads/sb-instagram-feed-images/internationalmedicalaid.jpg" alt="" />



    </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <Link to="/login">
        
        <div className="header_option">

          <span className="header_optionlineOne">Hello Guest, </span>
          <span className="header_optionlineTwo">Sign In</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionlineOne">Returns </span>
          <span className="header_optionlineTwo"> & Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Get </span>
          <span className="header_optionlineTwo">Vaccinated</span>
        </div>
      </div>
      <Link to="/checkout">
      <div className="header_optionBasket">
        <ShoppingBasketIcon/>
        <span className="header_optionlineTwo header_basketCount">{basket?.length}</span>
  
      </div>


      </Link>


    </div>
  );
}

export default Header;
