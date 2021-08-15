import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"
import {connect} from 'react-redux';


function Product({id,title,image,price}) {
    const [{basket},dispatch]=useStateValue();

    console.log("THis is the Basket")

    const addToBasket=() =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price

            },
        })
    }
    return (
        <div className="product">
            <img className="product_image" src={image} alt="" />

            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                    </p>
            </div>

            <button onClick={addToBasket}>Add to MediCart</button>
        </div>
    )
}

export default Product
