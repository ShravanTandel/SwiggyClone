import './inputs.style.css';

import React from "react";
import FavouriteCheckboxControlled from './components/favouriteCheckbox/FavouriteCheckboxControlled';
import VegOnlyCheckboxControlled from './components/vegOnlyCheckbox/VegOnlyCheckboxControlled';
import SearchBarControlled from './components/searchBar/SearchBarControlled';

function Inputs () {
    return (
        <>
            <div className="searchbar-and-checkboxes">
                <div className="searchbar-and-checkboxes-1">
                    <FavouriteCheckboxControlled />
                    <VegOnlyCheckboxControlled />
                    <SearchBarControlled />
                </div>
            </div>
        </>
    );
};

export default Inputs;