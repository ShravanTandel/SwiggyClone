function updateSearchItemsWithCategoryList(searchItems, categoryList) {
    return {
        type: 'searchItems/updated',
        payload: {
            searchItems: searchItems,
            categoryList: categoryList,
        },
    };
}

export default updateSearchItemsWithCategoryList;
