import './cartItems.style.css';

import React from 'react';
import CartItem from './components/cartItem/CartItem';
import CheckoutButton from './components/checkoutButton/index';
import { connect } from 'react-redux';
import {
    getCartItemCount,
    getCartItems,
} from '../../../../selectors/cartSelector';

function CartItems({ cartItems, cartItemCount }) {
    const subTotal = cartItems.reduce((prev, curr) => {
        return prev + curr.count * curr.price;
    }, 0);

    return (
        <>
            {cartItemCount === 0 ? (
                <div>
                    <div className="cart__name">
                        <span className="cart__name__empty">Cart Empty</span>
                    </div>
                    <div className="cart-empty-image">
                        <img src="./images/cartEmpty.png" alt="....." />
                    </div>
                </div>
            ) : (
                <div className="cart">
                    <div className="cart__name">
                        <span className="cart__name__text">Cart</span>
                        <br />
                        <span className="cart__name__count">
                            {cartItemCount} Item
                        </span>
                    </div>
                    <div className="cart__items">
                        {cartItems.map((data) => {
                            return (
                                <CartItem
                                    cartItem={data}
                                    key={data.primaryKey}
                                />
                            );
                        })}
                    </div>
                    <div className="cart__subtotal">
                        <div className="cart__subtotal__label">
                            <span className="cart__subtotal__label__primary">
                                SubTotal
                            </span>
                            <br />
                            <span className="cart__subtotal__label__secondary">
                                Extra charges may apply
                            </span>
                        </div>
                        <div className="cart__subtotal__price">
                            ₹ {subTotal}
                        </div>
                    </div>
                    <CheckoutButton data="CHECKOUT" />
                </div>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: getCartItems(state),
        cartItemCount: getCartItemCount(state),
    };
};

export default connect(mapStateToProps)(CartItems);
