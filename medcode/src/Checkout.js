import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal.js'

function Checkout() {
    return (
        <div className="checkout">



        <div>
            <h2 className="checkout_title">YOUR BASKET,</h2>
        </div>



        <div className="checkout_right">
        <Subtotal/>
        </div>


        </div>
    )
}

export default Checkout
