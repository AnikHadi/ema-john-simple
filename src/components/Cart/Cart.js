import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    
    const cart = props.cart;
    const itemPrice = cart.reduce( (total, item) => {
        return total + item.price;
    } , 0)

    let shippingCost = 0;
    if(itemPrice < 35 && itemPrice > 15){
        shippingCost = 4.99;
    }
    else if (itemPrice < 15  && itemPrice > 0){
        shippingCost = 12.99;
    }
    else{
        shippingCost = 0;
    }

    const number =(number) => {
        return number.toFixed(2);
    }
    const totalBeforeTax = itemPrice + shippingCost;
    const tax = totalBeforeTax * 0.05;
    const grandTotal = totalBeforeTax + tax;

    return (
        <div className='cart-container'>
            <h5>Order Summary</h5>
            <p><small>Items ordered: {cart.length}</small></p>

            <tbody className='cart-details'>
                <tr>
                    <td>Item:</td>
                    <td>$ {number(itemPrice)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td>$ {number(shippingCost)}</td>
                </tr>
                <tr>
                    <td>Total before Tax:</td>
                    <td>$ {number(totalBeforeTax)}</td>
                </tr>
                <tr>
                    <td>Estimated Tax:</td>
                    <td>$ {number(tax)}</td>
                </tr>
                <tr>
                    <td>Order Total:</td>
                    <td>$ {number(grandTotal)}</td>
                </tr>
                {/* <p><small>Item:</small></p>
                <p><small>Shipping & Handling:</small></p>
                <p><small>Total before tax:</small></p>
                <p><small>Estimated Tax:</small></p>
                <p>Order Total: </p> */}
            </tbody>
            <button><FontAwesomeIcon icon={faShoppingCart} /> Review your order</button>
        </div>
    );
};

export default Cart;