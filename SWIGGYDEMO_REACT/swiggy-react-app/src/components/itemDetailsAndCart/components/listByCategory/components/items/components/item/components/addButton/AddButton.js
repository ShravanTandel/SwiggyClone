import './addButton.style.css';

import React from "react";

function AddButton ({data, pk, onClickADD}) {
    return (
        <>
            <div className="add" onClick={ () => {onClickADD(pk)}}>{data}</div>
        </>
    );
};

export default AddButton;