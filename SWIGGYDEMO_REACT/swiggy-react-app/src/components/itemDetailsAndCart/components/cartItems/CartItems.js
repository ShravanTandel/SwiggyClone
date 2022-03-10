import './cartItems.style.css';

import React from "react";
import CartItem from "./components/cartItem/CartItem";
import CheckoutButtonControlled from './components/checkoutButton';

function CartItems ({cartItems, onClickPlus, onClickMinus}) {
    let subTotal = 0;
    cartItems.forEach( (i) => {
        subTotal += ( i.count * i.price );
    })

    let numberOfItemsInCart = cartItems.length;

    return (
        <>

            {
                numberOfItemsInCart === 0 

                ? 
                <div>
                    <div className = "cart_name">
                        <span className = "cart3">Cart Empty</span>
                    </div>
                    <div className = "cartEmptyImage">
                        <img src = "./images/cartEmpty.png" alt='.....'/>
                    </div> 
                </div>

            :

                <div className="cart">
                    <div className="cart_name">
                        <span className="cart1">Cart</span><br />
                        <span className="cart2">{numberOfItemsInCart} Item</span>
                    </div>
                    <div className="cart_items">
                        {
                            cartItems.map( (data) => {
                                return (
                                    <CartItem cartItem = {data} key = {data.pk} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
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

            }
        </>
    );
};

export default CartItems;