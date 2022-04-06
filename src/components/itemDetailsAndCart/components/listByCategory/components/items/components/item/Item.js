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
            <div className="single-item" key={item.primaryKey}>
                <div className="single-item__details">
                    {item.isVeg ? (
                        <div className="single-item__veg">Veg</div>
                    ) : (
                        <div className="single-item__nonveg">Non Veg</div>
                    )}
                    <div className="single-item__food-name">{item.name}</div>
                    <div className="single-item__food-price">
                        <span>₹</span>{' '}
                        <span className="single-item__price">{item.price}</span>
                    </div>
                    <div className="single-item__combo">{item.description}</div>
                </div>
                <div className="single-item__image-and-button">
                    <div className="single-item__image">
                        <img src={item.image} alt="" />
                        <div className="single-item__button">
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
