import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider"
import "./Product"
import {getBasketTotal} from "./reducer"


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
            <button className="btn">Proceed to Checkout</button>

            </div>

          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />

    </div>
  );
}

export default Subtotal;
