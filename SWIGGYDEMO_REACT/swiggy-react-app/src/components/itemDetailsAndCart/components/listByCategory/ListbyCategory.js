import './listByCategory.style.css';

import React from "react";
import Items from "./components/items";

function ListByCategory ({data, category, cartItems, onClickADD, onClickPlus, onClickMinus}) {
    let arrayOfItemsOrderedByCategory = [];

    category.forEach( (i, index) => {
        let arrayOfItems = [];
        arrayOfItems = data.filter( (d) => {
            return d.category === i;
        } )
        arrayOfItemsOrderedByCategory[index] = arrayOfItems;
    })
    return (
        <>
            <div className='items'>
                {
                    category.map( (currentCategory, index) => {
                        return (
                                <div id={index + 1} key={index} className="item">
                                    <div className="name">
                                        <span className="n">{currentCategory}</span><br />
                                        <span className="i">{arrayOfItemsOrderedByCategory[index].length} items</span>
                                    </div>
                                    <div className="listItems">
                                        <Items data={arrayOfItemsOrderedByCategory[index]} cartItems={cartItems} onClickADD={onClickADD} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
                                    </div>
                                </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default ListByCategory;