import './inputs.style.css';

import React from "react";
import FavouriteCheckboxContainer from './components/favouriteCheckbox/FavouriteCheckboxContainer';
import VegOnlyCheckboxContainer from './components/vegOnlyCheckbox/VegOnlyCheckboxContainer';
import SearchBarContainer from './components/searchBar/SearchBarContainer';

function Filters () {
    return (
        <>
            <div className="searchbar-and-checkboxes">
                <div className="searchbar-and-checkboxes-1">
                    <FavouriteCheckboxContainer />
                    <VegOnlyCheckboxContainer />
                    <SearchBarContainer />
                </div>
            </div>
        </>
    );
};

export default Filters;