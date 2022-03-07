import './App.css';

import Header from './components/header/index';
import BreadCrumb from './components/breadCrumb/index';
import RestaurantDetails from './components/restaurantDetails/index';
import ItemDetailsAndCart from './components/itemDetailsAndCart/index';

import React, { useState } from 'react';

import { sideMenu } from './models/menu.mjs';
import { menuItemList } from './models/itemList.mjs';
import Inputs from './components/Inputs/Inputs';

function App () {

  let cart = 
    [
      {
        name: "Whopper Fridays- Veg Doubles",
        isVeg: true,
        price: 298,
        image: "Whopper Fridays- Veg Doubles",
        count: 1,
        pk: 1,
    },

    {
        name: "Whopper Fridays - Veg meal",
        isVeg: true,
        price: 327,
        image: "Whopper Fridays - Veg meal",
        count: 2,
        pk: 2,
    }
  ];

  return (
    <>
      <Header />
      <BreadCrumb />
      <RestaurantDetails />
      <Inputs />
      <ItemDetailsAndCart sideMenu = {sideMenu} menuItemList = {menuItemList} cart={cart}/>
    </>
  );
};

export default App;
