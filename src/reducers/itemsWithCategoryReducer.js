const initialState = {
    items: {},
    categoryList: [],
};

function itemsWithCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'items/updatedItemsWithCategory': {
            return {
                items: action.payload.updatedItems,
                categoryList: action.payload.updatedCategoryList,
            };
        }
        default: {
            return state;
        }
    }
}

export default itemsWithCategoryReducer;
