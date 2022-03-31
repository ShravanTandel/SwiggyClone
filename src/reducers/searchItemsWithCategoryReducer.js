const initialState = {
    searchItems: {},
    searchCategoryList: [],
};

function searchItemsWithCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'searchItems/updated': {
            return {
                searchItems: action.payload.searchItems,
                searchCategoryList: action.payload.categoryList,
            };
        }
        default: {
            return state;
        }
    }
}

export default searchItemsWithCategoryReducer;
