import './cartItem.style.css';

import React from 'react';

import ActionButton from '../cartItem/components/actionButton/ActionButton';

function CartItem({ cartItem }) {
    return (
        <div className="cart-item" key={cartItem.primaryKey}>
            <div className="cart-item__veg-or-nonveg">
                {cartItem.isVeg ? (
                    <div className="cart-item__veg">Veg</div>
                ) : (
                    <div className="cart-item__nonveg">Non Veg</div>
                )}
            </div>
            <div className="cart-item__dishName">{cartItem.name}</div>
            <ActionButton
                count={cartItem.count}
                primaryKey={cartItem.primaryKey}
            />
            <div className="cart-item__price">
                ₹ {cartItem.price * cartItem.count}
            </div>
        </div>
    );
}

export default CartItem;
