function updateItemsWithCategoryList(updatedItems, categoryList) {
    return {
        type: 'items/updatedItemsWithCategory',
        payload: {
            updatedItems: updatedItems,
            updatedCategoryList: categoryList,
        },
    };
}

export default updateItemsWithCategoryList;
