function updateCategoryList(arr) {
    return {
        type: 'categoryList/updated',
        payload: arr,
    };
}

export default updateCategoryList;
