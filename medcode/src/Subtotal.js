import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider"
import "./Product"
import {useHistory} from "react-router-dom"


function Subtotal() {
  const [{basket},dispatch]=useStateValue()
  const history= useHistory();

  

  return (

    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => ( 
          <>
            <div className="container">

            </div>

            <div className="cont">
            <p className="subtotal_gif">
              Subtotal ({basket?.length} items)
              : <strong>{value}</strong>
            </p>
            <button className="btn" onClick={e=>history.push("/payment")}>Proceed to Checkout</button>

            </div>

          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
    />

    </div>
  );
}

export default Subtotal;
