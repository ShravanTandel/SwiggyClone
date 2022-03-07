import React from "react";

function CartItem ({cartItem}) {
    return (
        <>
            <div className="cart_item" pk = {cartItem.pk}>
                <div className="cart_vegORnonveg">
                    {cartItem.isVeg ? <div className = 'veg'>Veg</div> : <div className = 'nonVeg'>Non Veg</div>}
                </div>
                <div className="dishName">
                    {cartItem.name}
                </div>
                <div className="addSub">
                    <div className="minus">
                        -
                    </div>
                    <div className="count">
                        {cartItem.count}
                    </div>
                    <div className="plus">
                        +
                    </div>
                </div>
                <div className="price">
                    ₹ {cartItem.price}
                </div>
            </div>
        </>
    );
};

export default CartItem;