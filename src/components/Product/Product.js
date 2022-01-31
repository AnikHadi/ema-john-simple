import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const {img, name, price, seller, stock} = props.product;
    const shopBtnHandler = props.shopBtnHandler;

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: $ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => shopBtnHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
        
    );
};

export default Product;