import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://img.freepik.com/free-vector/cute-happy-smiling-medicine-pill-capsule-bottle-flat-cartoon-character-illustration-icon-isolated-white-tablet-pill-capsule-antibiotic-healthcare-drug-medical_92289-526.jpg?size=626&ext=jpg" alt="" />

      <div className="header_search">
        <input className="header_search" type="text"></input>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineOne">Hello Guest </span>
          <span className="header_optionlineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Returns </span>
          <span className="header_optionlineTwo">and Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineOne">Your </span>
          <span className="header_optionlineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
