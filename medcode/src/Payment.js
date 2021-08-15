import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
import GooglePlayButton from "@google-pay/button-react";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const functions = require("firebase-functions");

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Test Address React 123</p>
            <p>Silicon Valley, USA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>

          <div className="payment_tit">
            <h3>Please Donate to our NGO Tieups for Allieviating HealthCare in Rural India</h3>
            <div>
              <a
                class="donate-with-crypto"
                href="https://commerce.coinbase.com/checkout/1ca1c2ee-2b0c-456c-8761-99792554db6b"
              >
                <button className="btn">Donate with Crypto</button>
              </a>
              <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
            </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
