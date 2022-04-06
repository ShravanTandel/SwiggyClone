import './filters.style.css';

import React from 'react';
import VegOnlyCheckbox from './components/vegOnlyCheckbox/VegOnlyCheckbox';
import SearchBar from './components/searchBar/SearchBar';
import FavouriteCheckbox from './components/favouriteCheckbox/FavouriteCheckbox';

function Filters({ isVeg, searchInputText, onCheckboxClick, onChange }) {
    return (
        <div className="searchbar-and-checkboxes">
            <div className="searchbar-and-checkboxes__group">
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
