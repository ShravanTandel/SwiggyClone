import './item.style.css';

import React from 'react';
import AddButton from './components/addButton/AddButton';
import ActionButtonForItems from './components/actionButtonForItems/ActionButtonForItems';

function Item({ item, cartItems }) {
    let flag = false;
    let count = 0;

    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].pk === item.pk) {
            flag = true;
            count = cartItems[i].count;
            break;
        }
    }
    return (
        <>
            <div className="singleItem" key={item.pk}>
                <div className="left">
                    {item.isVeg ? (
                        <div className="veg">Veg</div>
                    ) : (
                        <div className="nonVeg">Non Veg</div>
                    )}
                    <div className="foodName">{item.name}</div>
                    <div className="foodPrice">
                        <span>₹</span>{' '}
                        <span className="price">{item.price}</span>
                    </div>
                    <div className="combo">{item.description}</div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src={item.image} alt="" />
                        <div className="button">
                            {flag ? (
                                <ActionButtonForItems
                                    pk={item.pk}
                                    count={count}
                                />
                            ) : (
                                <AddButton data="ADD" pk={item.pk} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </>
    );
}

export default Item;
