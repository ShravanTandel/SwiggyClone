import { menuItemList } from '../models/itemList';

const groupBy = (key, items) =>
    items.reduce((cache, item) => {
        const property = item[key];

        if (property in cache) {
            return { ...cache, [property]: cache[property].concat(item) };
        } else {
            return { ...cache, [property]: [item] };
        }
    }, {});

const initialState = groupBy('category', menuItemList);

function itemsReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default itemsReducer;
