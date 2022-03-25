import './addButton.style.css';

import React from 'react';

import { addCartItem } from '../../../../../../../../../../actions/cartActionsCreators';
import { connect } from 'react-redux';

function AddButton(props) {
    return (
        <div className="add" onClick={() => props.addItemsToCart(props.pk)}>
            {props.data}
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
