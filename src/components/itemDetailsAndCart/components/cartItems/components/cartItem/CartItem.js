import './cartItem.style.css';

import React from 'react';

import ActionButton from '../cartItem/components/actionButton/ActionButton';

function CartItem({ cartItem }) {
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
                primaryKey={cartItem.primaryKey}
            />
            <div className="price">₹ {cartItem.price * cartItem.count}</div>
        </div>
    );
}

export default CartItem;
