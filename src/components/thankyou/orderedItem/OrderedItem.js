import './orderedItem.style.css';

import React from 'react';

function OrderedItem({ item }) {
    return (
        <>
            <div className="ordered-item">
                <div className="ordered-item__image">
                    <img src={item.image} alt={item.image} />
                </div>
                <div className="ordered-item__name">{item.name}</div>
                <div className="ordered-item__count">{item.count} item</div>
                <div className="ordered-item__price">
                    ₹ {item.price * item.count}
                </div>
            </div>
            <div className="ordered-item__line"></div>
        </>
    );
}

export default OrderedItem;
