import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"


function Header() {
  const [{basket,user},dispatch]=useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
  }
}


  return (
    <div className="header">
    <Link to="/">
    <img className="header_logo" src="https://medicalaid.org/wp-content/uploads/sb-instagram-feed-images/internationalmedicalaid.jpg" alt="" />





    </Link>
    <h2 className="bitmed"> BitMed </h2>


      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"/>
      </div>
 
      <div className="header_nav">
        <Link to={!user && "/login"}>
        
        <div onClick={handleAuthentication} className="header_option">

          <span className="header_optionlineOne">Hello {!user?"Guest":user.email}, </span>
          <span className="header_optionlineTwo">{user ? "Sign Out":"Sign In"}</span>
        </div>
        </Link>


        <Link to="/mission">
        <div className="header_option">
          <span className="header_optionlineOne">About </span>
          <span className="header_optionlineTwo">BitMed</span>
        </div>
        </Link>
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
