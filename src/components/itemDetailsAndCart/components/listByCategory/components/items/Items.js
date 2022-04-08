import React from 'react';
import { connect } from 'react-redux';
import { getCartItems } from '../../../../../../selectors/cartSelector';
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
        cartItems: getCartItems(state),
    };
};

export default connect(mapStateToProps)(Items);
