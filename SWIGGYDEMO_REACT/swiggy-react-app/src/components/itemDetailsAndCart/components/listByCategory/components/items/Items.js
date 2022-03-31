import React from 'react';
import { connect } from 'react-redux';
import Item from './components/item';

function Items({ cartItems, data }) {
    return (
        <>
            {data.map((d) => (
                <Item key={d.primaryKey} item={d} cartItems={cartItems} />
            ))}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
    };
};

export default connect(mapStateToProps)(Items);
