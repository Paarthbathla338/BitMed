import React from "react";
import Product from "./Product.js";
import "./Home2.css";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <div className="home_main">
      <p className="ap">
        <h2>COVID-19 SPECIAL</h2>
      </p>

      <div className="home2">
        <div className="home_row">
          <Product
            title="Dettol Antiseptic (Liquid Bottle of 1l)"
            image="https://m.media-amazon.com/images/I/51MHrlRbc+S._SX679_.jpg"/>
          <Product title="Medlife Advanced Hand Sanitizer (200 Ml)" image="https://m.media-amazon.com/images/I/31eBNTBP-WL.jpg" />
          <Product title="N-95 Tri-Active with 6 layer Protection" image="https://m.media-amazon.com/images/I/81p2NFSykwL._SL1500_.jpg" />
          <Product title="PPE Kit (High Protection Kit 90gsm)" image="https://www.circleone.in/images/products_gallery_images/Kit_Mockup_533_x_315.jpg" />
        </div>

        <div className="home_row">
          <Product title="Covid-19 shield with High Protection by Anton Enterprise" image="https://5.imimg.com/data5/GN/KS/XB/SELLER-5308319/corona-full-face-shield-ear-to-ear-cover-500x500.jpg" />
          <Product title="Thermal Scanner Digital with Flexi-Tip" image="https://m.media-amazon.com/images/I/51OW63EjLTL._SL1000_.jpg" />
          <Product title="Thermometer Mercury-Free 100% Safe" image="https://www.carlroth.com/medias/1C5T-1000Wx1000H?context=bWFzdGVyfGltYWdlc3wyMTkzNnxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDdlLzg5ODk5MjIzNjEzNzQuanBnfDE4MmVlNzY0YTJhNjM5N2QyN2JhODFmNDc3YjQzYjVjMTFkMDM5ODljNTFmZDJhNzkwZWZlNTllMjEwODY5ZGE" />
          <Product  title="Hand Gloves and Safety Gear (Packet with 4 pairs)" image="https://rukminim1.flixcart.com/image/416/416/kcm9t3k0/cleaning-glove/f/j/z/2-pair-pure-cotton-hand-gloves-re-usable-washable-to-protect-original-imaftzuzztat4gtq.jpeg?q=70"/>
        </div>
      </div>

      <div className="footer">
        <h2>Built By Paarth Bathla &copy; 2021</h2>
        <Link to="/mission">
          <a href="mission.html" target="_blank">
            <h5>Read Mission Statement Here</h5>
          </a>
        </Link>

        <a href="https://github.com/Paarthbathla338">
          <img
            className="github"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Home2;
