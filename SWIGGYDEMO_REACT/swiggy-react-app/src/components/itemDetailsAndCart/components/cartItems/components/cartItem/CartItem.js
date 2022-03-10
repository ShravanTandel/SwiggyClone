import './cartItem.style.css';

import React from "react";
import ActionButtonContainer from "./components/actionButton/ActionButtonContainer";

function CartItem ({cartItem, onClickPlus, onClickMinus}) {
    return (
        <>
            <div className="cart_item" pk = {cartItem.pk}>
                <div className="cart_vegORnonveg">
                    {cartItem.isVeg ? <div className = 'veg'>Veg</div> : <div className = 'nonVeg'>Non Veg</div>}
                </div>
                <div className="dishName">
                    {cartItem.name}
                </div>
                <ActionButtonContainer count={cartItem.count} onClickPlus={onClickPlus} pk={cartItem.pk} onClickMinus={onClickMinus}/>
                <div className="price">
                    ₹ {cartItem.price}
                </div>
            </div>
        </>
    );
};

export default CartItem;