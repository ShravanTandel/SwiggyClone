import './item.style.css';

import React from "react";
import AddButtonContainer from "./components/addButton/index";
import ActionButtonForItemsContainer from './components/actionButtonForItems/ActionButtonForItemsContainer';

function Item ({item, cartItems, onClickADD, onClickPlus, onClickMinus}) {

    let flag = false;
    let count = 0;

    for (var i=0; i<cartItems.length; i++) {
        if (cartItems[i].pk === item.pk) {
            flag = true;
            count = cartItems[i].count;
            break;
        }
    }
    return (
        <>
            <div className="singleItem" key = {item.pk}>
                <div className="left">
                    {item.isVeg ? <div className = 'veg'>Veg</div> : <div className = 'nonVeg'>Non Veg</div>}
                    <div className="foodName">
                        {item.name}
                    </div>
                    <div className="foodPrice">
                        <span>₹</span> <span className = "price">{item.price}</span>
                    </div>
                    <div className="combo">
                        {item.description}
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                            <img src={item.image} alt="" />
                        <div className = "button">
                        {flag ? 
                        <ActionButtonForItemsContainer pk={item.pk} count={count} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
                        :
                        <AddButtonContainer pk={item.pk} onClickADD={onClickADD} />
                    }
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </>
    );
};

export default Item;