import React from 'react';
import Item from './components/item';

function Items({ data, cartItems, onClickADD, onClickPlus, onClickMinus }) {
    return (
        <>
            {data.map((d) => {
                return (
                    <Item
                        key={d.primaryKey}
                        item={d}
                        cartItems={cartItems}
                        onClickADD={onClickADD}
                        onClickPlus={onClickPlus}
                        onClickMinus={onClickMinus}
                    />
                );
            })}
        </>
    );
}

export default Items;
