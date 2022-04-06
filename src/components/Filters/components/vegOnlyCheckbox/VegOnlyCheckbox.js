import './vegOnlyCheckbox.style.css';

import React from 'react';

function VegOnlyCheckbox({ isVeg, onCheckboxClick }) {
    return (
        <div className="veg-or-nonveg">
            <div className="veg-or-nonveg__checkbox-div">
                <label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={isVeg}
                        onClick={onCheckboxClick}
                    />
                </label>
            </div>
            <span className="veg-or-nonveg__name">Veg Only</span>
        </div>
    );
}

export default VegOnlyCheckbox;
