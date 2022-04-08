import './addButton.style.css';

import React from 'react';

function AddButton({ data, onClickADD, primaryKey }) {
    return (
        <div className="add" onClick={() => onClickADD(primaryKey)}>
            {data}
        </div>
    );
}

export default AddButton;
