import './addButton.style.css';

import React from "react";

function AddButton ({data, onClickADD}) {
    return (
        <>
            <div className="add" onClick={onClickADD}>{data}</div>
        </>
    );
};

export default AddButton;