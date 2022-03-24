import './addButton.style.css';

import React from "react";

import { addCartItem } from '../../../../../../../../../../actions/cartActionsCreators'
import { useDispatch } from 'react-redux';

function AddButton ({data, pk, onClickADD}) {

    const dispatch = useDispatch();
    return (
        <>
            {/* <div className="add" onClick={ () => {onClickADD(pk)}}>{data}</div> */}
            <div className="add" onClick={ () => {dispatch(addCartItem(pk))}}>{data}</div>
        </>
    );
};

export default AddButton;