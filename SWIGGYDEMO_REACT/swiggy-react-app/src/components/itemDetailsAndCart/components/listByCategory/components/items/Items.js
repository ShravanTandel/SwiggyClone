import React from "react";
import Item from "./components/item";

function Items ({data, cartItems, onClickADD, onClickPlus, onClickMinus}) {

    // const 
    return (
        <>
            {
                data.map( (d) => {
                    return (
                            <Item key={d.pk} item={d} cartItems={cartItems} onClickADD={(onClickADD)} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
                    );
                })
            }
        </>
    );
};

export default Items;