import './actionButton.style.css';

import React from "react";

function ActionButton ({count}) {
    return (
        <>
            <div className="addSub">
                <div className="minus">
                    -
                </div>
                <div className="count">
                    {count}
                </div>
                <div className="plus">
                    +
                </div>
            </div>
        </>
    );
};

export default ActionButton;