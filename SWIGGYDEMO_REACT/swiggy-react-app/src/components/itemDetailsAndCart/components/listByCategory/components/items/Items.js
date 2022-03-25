import React from 'react';
import { useSelector } from 'react-redux';
import Item from './components/item';

function Items({ data }) {
    const CartItems = useSelector((state) => state.cartItems);

    return (
        <>
            {data.map((d) => {
                return <Item key={d.pk} item={d} cartItems={CartItems} />;
            })}
        </>
    );
}

export default Items;
