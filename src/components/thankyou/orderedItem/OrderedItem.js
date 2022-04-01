import './orderedItem.style.css';

import React from 'react';

function OrderedItem({ item }) {
    return (
        <>
            <div className="orderedItem">
                <div className="orderedItem_image">
                    <img src={item.image} alt={item.image} />
                </div>
                <div className="orderedItem_name">{item.name}</div>
                <div className="orderedItem_count">{item.count} item</div>
                <div className="orderedItem_price">
                    ₹ {item.price * item.count}
                </div>
            </div>
            <div className="orderedItem_line"></div>
        </>
    );
}

export default OrderedItem;
