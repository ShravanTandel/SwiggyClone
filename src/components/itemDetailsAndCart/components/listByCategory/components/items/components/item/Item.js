import './item.style.css';

import React from 'react';
import AddButton from './components/addButton/AddButton';
import ActionButtonForItems from './components/actionButtonForItems/ActionButtonForItems';

function Item({ item, cartItems }) {
    const index = cartItems.findIndex((i) => i.primaryKey === item.primaryKey);
    const flag = index > -1 ? true : false;
    const count = index > -1 ? cartItems[index].count : 0;
    return (
        <>
            <div className="singleItem" key={item.primaryKey}>
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
                                    primaryKey={item.primaryKey}
                                    count={count}
                                />
                            ) : (
                                <AddButton
                                    data="ADD"
                                    primaryKey={item.primaryKey}
                                />
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
