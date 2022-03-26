import './App.css';
import React from 'react';

import Header from './components/header/index';
import BreadCrumb from './components/breadCrumb/index';
import RestaurantDetails from './components/restaurantDetails/index';
import ItemDetailsAndCart from './components/itemDetailsAndCart/index';

import Filters from './components/Filters/Filters';
import { useState } from 'react';

const ButtonColor = React.createContext();

function App() {
    const [isVeg, setIsVeg] = useState(false);
    const [searchInputText, setSearchInputText] = useState('');
    const [color, setColor] = useState('green');

    function changeVegOnlyFilter() {
        setIsVeg((currentState) => {
            return !currentState;
        });
    }

    function updateInputText(e) {
        setSearchInputText(e.target.value);
    }

    function changeButtonColor(color) {
        setColor(color === 'green' ? 'red' : 'green');
    }
    return (
        <>
            <ButtonColor.Provider value={color}>
                <Header onClick={changeButtonColor} />
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
            </ButtonColor.Provider>
        </>
    );
}

export default App;
export { ButtonColor };
