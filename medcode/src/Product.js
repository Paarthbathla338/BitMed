import React from 'react'
import "./Product.css"

function Product({title,image,price}) {
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

            <button>Add to MediCart</button>
        </div>
    )
}

export default Product
