import './cartItem.style.css';

import React from 'react';
import ActionButton from './components/actionButton/ActionButton';

function CartItem({ cartItem, onClickPlus, onClickMinus }) {
    return (
        <div className="cart_item" key={cartItem.primaryKey}>
            <div className="cart_vegORnonveg">
                {cartItem.isVeg ? (
                    <div className="veg">Veg</div>
                ) : (
                    <div className="nonVeg">Non Veg</div>
                )}
            </div>
            <div className="dishName">{cartItem.name}</div>
            <ActionButton
                count={cartItem.count}
                onClickPlus={onClickPlus}
                primaryKey={cartItem.primaryKey}
                onClickMinus={onClickMinus}
            />
            <div className="price">₹ {cartItem.price * cartItem.count}</div>
        </div>
    );
}

export default CartItem;
