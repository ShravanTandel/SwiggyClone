import './favouriteCheckbox.style.css';

import React from 'react';

function FavouriteCheckbox() {
    return (
        <div className="favourite">
            <div className="favourite__checkbox-div">
                <label>
                    <input
                        type="checkbox"
                        className="favourite__checkbox-div__checkbox"
                    />
                </label>
            </div>
            <span className="favourite__name">Favourite</span>
        </div>
    );
}

export default FavouriteCheckbox;
