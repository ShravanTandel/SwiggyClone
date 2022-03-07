import React from "react";

function FavouriteCheckbox () {
    return (
        <>
            <div className="favourite">
                <div className="checkbox-div">
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </div>
                <span className="name">
                    Favourite
                </span>
            </div>
        </>
    );
};

export default FavouriteCheckbox;