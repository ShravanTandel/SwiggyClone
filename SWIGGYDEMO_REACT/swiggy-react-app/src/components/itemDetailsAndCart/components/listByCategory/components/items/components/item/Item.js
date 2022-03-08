import './item.style.css';

import React from "react";
import AddButtonContainer from "./components/addButton/index";

function Item ({item}) {
    return (
        <>
            <div className="singleItem" pk = {item.pk}>
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
                        {/* {flag ? `<div className = "addSub"><span className = "minus">-</span><span className = "count">${itemInsideCart.count}</span><span className = "plus">+</span></div>`
                        :
                        `<div className = "add">ADD</div>`
                    } */}
                            <AddButtonContainer />
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </>
    );
};

export default Item;