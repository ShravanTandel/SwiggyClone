import './cartItems.style.css';

import React, { useState } from "react";
import CartItem from "./components/cartItem/CartItem";
import CheckoutButtonControlled from './components/checkoutButton';

function CartItems ({cartItems, }) {
    let subTotal = 0;
    cartItems.map( (i) => {
        subTotal += ( i.count * i.price );
    });

    let numberOfItemsInCart = cartItems.length;

    return (
        <>
            <div className="cart">
                <div className="cart_name">
                    <span className="cart1">Cart</span><br />
                    <span className="cart2">{numberOfItemsInCart} Item</span>
                </div>
                <div className="cart_items">
                    {
                        cartItems.map( (data) => {
                            return (
                                <CartItem cartItem = {data} key = {data.pk}/>
                            );
                        })
                    }
                </div>
                <div className="subTotal">
                    <div className="sub">
                        <span className="s1">SubTotal</span><br />
                        <span className="s2">Extra charges may apply</span>
                    </div>
                    <div className="price">
                        ₹ {subTotal}
                    </div>
                </div>
                <CheckoutButtonControlled />
            </div>
        </>
    );
};

export default CartItems;