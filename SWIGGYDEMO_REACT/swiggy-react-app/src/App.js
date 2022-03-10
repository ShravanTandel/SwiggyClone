import './App.css';

import Header from './components/header/index';
import BreadCrumb from './components/breadCrumb/index';
import RestaurantDetails from './components/restaurantDetails/index';
import ItemDetailsAndCart from './components/itemDetailsAndCart/index';

import { sideMenu } from './models/menu.mjs';
import { menuItemList } from './models/itemList.mjs';

import cart from './models/cartItems';
import Filters from './components/Filters/Filters';

function App () {
  return (
    <>
      <Header />
      <BreadCrumb />
      <RestaurantDetails />
      <Filters />
      <ItemDetailsAndCart sideMenu = {sideMenu} menuItemList = {menuItemList} cart={cart}/>
    </>
  );
};

export default App;
