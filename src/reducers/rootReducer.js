import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

import itemsWithCategoryReducer from './itemsWithCategoryReducer';
import searchItemsWithCategoryReducer from './searchItemsWithCategoryReducer';

const rootReducer = combineReducers({
    cartItems: cartReducer,
    itemsWithCategory: itemsWithCategoryReducer,
    searchItemsWithCategory: searchItemsWithCategoryReducer,
});

export default rootReducer;
