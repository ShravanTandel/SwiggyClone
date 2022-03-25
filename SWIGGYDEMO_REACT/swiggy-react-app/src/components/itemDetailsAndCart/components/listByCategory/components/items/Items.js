import React from 'react';
import { connect } from 'react-redux';
import Item from './components/item';

function Items(props) {
    const cartItems = props.cartItems;

    return (
        <>
            {props.data.map((d) => {
                return <Item key={d.pk} item={d} cartItems={cartItems} />;
            })}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
    };
};

export default connect(mapStateToProps)(Items);
