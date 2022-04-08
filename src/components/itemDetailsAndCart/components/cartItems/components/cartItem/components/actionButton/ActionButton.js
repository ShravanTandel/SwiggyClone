import './actionButton.style.css';

import React from 'react';

function ActionButton({ count, onClickPlus, onClickMinus, primaryKey }) {
    return (
        <div className="addSubCart">
            <div className="minus" onClick={() => onClickMinus(primaryKey)}>
                -
            </div>
            <div className="count">{count}</div>
            <div className="plus" onClick={() => onClickPlus(primaryKey)}>
                +
            </div>
        </div>
    );
}

export default ActionButton;
