import './searchBar.style.css';

import React from 'react';

function SearchBar({ searchInputText, onChange }) {
    return (
        <div className="searchbar">
            <div className="searchbar__input">
                <label>
                    <input
                        type="text"
                        value={searchInputText}
                        onChange={(e) => onChange(e)}
                        placeholder="Search for dishes....."
                    />
                </label>
            </div>
        </div>
    );
}

export default SearchBar;
