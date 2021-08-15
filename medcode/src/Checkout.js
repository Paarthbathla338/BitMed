import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal.js'
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct.js"


function Checkout() {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="container">
        
        <div className="checkout_left">



        <div>
            <h2 className="checkout_title">YOUR BASKET,</h2>
            {basket.map(item =>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                />
            ))}


        </div>
        </div>






        <div className="checkout_right">
        <Subtotal/>
        </div>


        </div>
    )
}

export default Checkout
