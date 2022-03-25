import './App.css';
import React from 'react';

import Header from './components/header/index';
import BreadCrumb from './components/breadCrumb/index';
import RestaurantDetails from './components/restaurantDetails/index';
import ItemDetailsAndCart from './components/itemDetailsAndCart/index';

import Filters from './components/Filters/Filters';
import { useState } from 'react';

function App() {
    const [isVeg, setIsVeg] = useState(false);
    const [searchInputText, setSearchInputText] = useState('');

    function changeVegOnlyFilter() {
        setIsVeg((currentState) => {
            return !currentState;
        });
    }

    function updateInputText(e) {
        setSearchInputText(e.target.value);
    }
    return (
        <>
            <Header />
            <BreadCrumb />
            <RestaurantDetails />
            <Filters
                isVeg={isVeg}
                searchInputText={searchInputText}
                onCheckboxClick={changeVegOnlyFilter}
                onChange={updateInputText}
            />
            <ItemDetailsAndCart
                isVeg={isVeg}
                searchInputText={searchInputText}
            />
        </>
    );
}

export default App;
