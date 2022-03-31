import './cartItems.style.css';

import React from 'react';
import CartItem from './components/cartItem/CartItem';
import CheckoutButton from './components/checkoutButton/CheckoutButton';

function CartItems({ cartItems, onClickPlus, onClickMinus, onCheckout }) {
    const subTotal = cartItems.reduce((prev, cur) => {
        return prev + cur.count * cur.price;
    }, 0);

    const numberOfItemsInCart = cartItems.length;

    return (
        <>
            {numberOfItemsInCart === 0 ? (
                <div>
                    <div className="cart_name">
                        <span className="cart3">Cart Empty</span>
                    </div>
                    <div className="cartEmptyImage">
                        <img src="./images/cartEmpty.png" alt="....." />
                    </div>
                </div>
            ) : (
                <div className="cart">
                    <div className="cart_name">
                        <span className="cart1">Cart</span>
                        <br />
                        <span className="cart2">
                            {numberOfItemsInCart} Item
                        </span>
                    </div>
                    <div className="cart_items">
                        {cartItems.map((data) => {
                            return (
                                <CartItem
                                    cartItem={data}
                                    key={data.primaryKey}
                                    onClickPlus={onClickPlus}
                                    onClickMinus={onClickMinus}
                                />
                            );
                        })}
                    </div>
                    <div className="subTotal">
                        <div className="sub">
                            <span className="s1">SubTotal</span>
                            <br />
                            <span className="s2">Extra charges may apply</span>
                        </div>
                        <div className="price">₹ {subTotal}</div>
                    </div>
                    <CheckoutButton data="Checkout" onCheckout={onCheckout} />
                </div>
            )}
        </>
    );
}

export default CartItems;
