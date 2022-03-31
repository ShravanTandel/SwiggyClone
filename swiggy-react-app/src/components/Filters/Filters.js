import './inputs.style.css';

import React from 'react';
import FavouriteCheckbox from './components/favouriteCheckbox/FavouriteCheckbox';
import VegOnlyCheckbox from './components/vegOnlyCheckbox/VegOnlyCheckbox';
import SearchBar from './components/searchBar/SearchBar';

function Filters({ isVeg, searchInputText, onCheckboxClick, onChange }) {
    return (
        <div className="searchbar-and-checkboxes">
            <div className="searchbar-and-checkboxes-1">
                <FavouriteCheckbox />
                <VegOnlyCheckbox
                    isVeg={isVeg}
                    onCheckboxClick={onCheckboxClick}
                />
                <SearchBar
                    searchInputText={searchInputText}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default Filters;
