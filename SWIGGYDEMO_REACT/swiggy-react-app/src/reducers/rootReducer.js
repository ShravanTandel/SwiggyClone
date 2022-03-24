import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

import categoryListReducer from './categoryListReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    cartItems: cartReducer,
    categoryList: categoryListReducer,
    items: itemsReducer,
});

export default rootReducer;
