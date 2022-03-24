import './cartItem.style.css';

import React from 'react';

import ActionButton from '../cartItem/components/actionButton/ActionButton';

function CartItem({ cartItem }) {
    return (
        <div className="cart_item" pk={cartItem.pk}>
            <div className="cart_vegORnonveg">
                {cartItem.isVeg ? (
                    <div className="veg">Veg</div>
                ) : (
                    <div className="nonVeg">Non Veg</div>
                )}
            </div>
            <div className="dishName">{cartItem.name}</div>
            <ActionButton count={cartItem.count} pk={cartItem.pk} />
            <div className="price">₹ {cartItem.price * cartItem.count}</div>
        </div>
    );
}

export default CartItem;
