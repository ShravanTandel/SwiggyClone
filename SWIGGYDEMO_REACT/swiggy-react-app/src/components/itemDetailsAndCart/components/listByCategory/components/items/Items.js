import React from "react";
import { useSelector } from "react-redux";
import Item from "./components/item";

function Items ({data, cartItems, onClickADD, onClickPlus, onClickMinus}) {

    const CartItems = useSelector(state => state.cartItems)

    // const 
    return (
        <>
            {
                data.map( (d) => {
                    return (
                            <Item key={d.pk} item={d} cartItems={CartItems} onClickADD={(onClickADD)} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
                    );
                })
            }
        </>
    );
};

export default Items;