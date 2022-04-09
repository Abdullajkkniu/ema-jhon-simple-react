import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    console.log(props)
    
    let total = 0;
    let shippin = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity+ product.quantity;
        total = total + product.price * product.quantity;
        shippin = shippin + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total+ shippin+ tax;
    
    return (
        <div className='cart'>
            <h4>Order summary in Cart</h4>
            <p>Selected Item:{quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping:${shippin}</p>
            <p>Tax: {tax}</p>
            <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;