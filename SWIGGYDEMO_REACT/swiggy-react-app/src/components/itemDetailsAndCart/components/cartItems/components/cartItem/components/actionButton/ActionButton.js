import './actionButton.style.css';

import React from "react";

function ActionButton ({count, onClickPlus, onClickMinus}) {
    return (
        <>
            <div className="addSubCart">
                <div className="minus" onClick={onClickMinus}>
                    -
                </div>
                <div className="count">
                    {count}
                </div>
                <div className="plus" onClick = {onClickPlus}>
                    +
                </div>
            </div>
        </>
    );
};

export default ActionButton;