import './vegOnlyCheckbox.style.css';

import React from "react";

function VegOnlyCheckbox () {
    return (
        <>
            <div className="veg-or-nonveg">
                <div className="checkbox-div">
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </div>
                <span className="name">
                    Veg Only
                </span>
            </div>
        </>
    );
};

export default VegOnlyCheckbox;