import './addButton.style.css';

import React from "react";

function AddButton ({data}) {
    return (
        <>
            <div className="add">{data}</div>
        </>
    );
};

export default AddButton;