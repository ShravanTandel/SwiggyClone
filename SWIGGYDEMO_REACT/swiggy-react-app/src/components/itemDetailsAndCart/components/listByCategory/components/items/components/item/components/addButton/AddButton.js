import './addButton.style.css';

import React from 'react';

import { addCartItem } from '../../../../../../../../../../actions/cartActionsCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function AddButton({ addItemsToCart, data, primaryKey }) {
    return (
        <div className="add" onClick={() => addItemsToCart(primaryKey)}>
            {data}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemsToCart: bindActionCreators(addCartItem, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(AddButton);
