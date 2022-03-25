import './addButton.style.css';

import React from 'react';

import { addCartItem } from '../../../../../../../../../../actions/cartActionsCreators';
import { connect } from 'react-redux';

function AddButton({ addItemsToCart, data, pk }) {
    return (
        <div className="add" onClick={() => addItemsToCart(pk)}>
            {data}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemsToCart: (pk) => {
            dispatch(addCartItem(pk));
        },
    };
};

export default connect(null, mapDispatchToProps)(AddButton);
