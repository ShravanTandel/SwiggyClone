import React, { useState } from 'react';

import BreadCrumb from '../breadCrumb';
import RestaurantDetails from '../restaurantDetails';
import Filters from '../Filters/Filters';
import ItemDetailsAndCart from '../itemDetailsAndCart';

function MainContant() {
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

export default MainContant;
