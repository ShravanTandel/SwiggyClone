import './addButton.style.css';

import React from 'react';

import { addCartItem } from '../../../../../../../../../../actions/cartActionsCreators';
import { useDispatch } from 'react-redux';

function AddButton({ data, pk }) {
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="add"
                onClick={() => {
                    dispatch(addCartItem(pk));
                }}
            >
                {data}
            </div>
        </>
    );
}

export default AddButton;
