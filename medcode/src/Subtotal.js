import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";


function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="container">
            <p className="subtotal_gif">
              Subtotal ({0} items):<strong>0</strong>
            </p>
            <br />


            <small className="subtotal_gift">
            <input type="checkbox"/>
              This Order is a Gift
            </small>
            <br />
            <br/>
            <button className="btn_check">Proceed to CheckOut</button>

            </div>

          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
    />

    </div>
  );
}

export default Subtotal;
