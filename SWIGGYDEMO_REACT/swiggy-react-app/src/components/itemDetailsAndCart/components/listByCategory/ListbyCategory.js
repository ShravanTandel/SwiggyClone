import './listByCategory.style.css';

import React, { useEffect } from 'react';
import Items from './components/items';
import { useDispatch, useSelector } from 'react-redux';
import updateSearchItemsWithCategoryList from '../../../../actions/searchItemsWithCategoryActionCreator';
import updateItemsWithCategoryList from '../../../../actions/itemsWithCategoryActionCreator';
import { menuItemList } from '../../../../models/itemList';
import { sideMenu } from '../../../../models/menu';

const groupBy = (key, items) =>
    items.reduce((cache, item) => {
        const property = item[key];

        if (property in cache) {
            return { ...cache, [property]: cache[property].concat(item) };
        } else {
            return { ...cache, [property]: [item] };
        }
    }, {});

function ListByCategory({ isVeg, searchInputText }) {
    const { items, categoryList } = useSelector(
        (state) => state.itemsWithCategory
    );
    const { searchItems, searchCategoryList } = useSelector(
        (state) => state.searchItemsWithCategory
    );

    const dispatch = useDispatch();

    function updateItemsAndCategoryList() {
        let itemsDetails = groupBy('category', menuItemList);
        let categoryListForOriginalItems = sideMenu;

        if (isVeg === true) {
            const updatedItems = {};
            const categoryList = [];
            categoryListForOriginalItems.forEach((cat) => {
                updatedItems[cat] = itemsDetails[cat].filter((item) => {
                    return item.isVeg === true;
                });
                if (updatedItems[cat].length === 0) {
                    delete updatedItems[cat];
                } else {
                    categoryList.push(cat);
                }
            });
            itemsDetails = updatedItems;
            console.log(categoryList);
            categoryListForOriginalItems = categoryList;
        }

        if (searchInputText.length !== 0) {
            const updatedSearchItems = {};
            const searchCategoryList = [];
            categoryListForOriginalItems.forEach((cat) => {
                updatedSearchItems[cat] = itemsDetails[cat].filter((item) => {
                    return (
                        item.name
                            .toUpperCase()
                            .indexOf(searchInputText.toUpperCase()) > -1
                    );
                });
                if (updatedSearchItems[cat].length === 0) {
                    delete updatedSearchItems[cat];
                } else {
                    searchCategoryList.push(cat);
                }
            });
            dispatch(
                updateSearchItemsWithCategoryList(
                    updatedSearchItems,
                    searchCategoryList
                )
            );
        }
        dispatch(
            updateItemsWithCategoryList(
                itemsDetails,
                categoryListForOriginalItems
            )
        );
    }

    useEffect(() => {
        updateItemsAndCategoryList();
    }, [isVeg, searchInputText]);

    return (
        <>
            <div className="items">
                {searchInputText.length === 0 ? (
                    ''
                ) : (
                    <>
                        <div className="searchResult-name">Search Result</div>
                        {Object.keys(searchItems).length !== 0 ? (
                            searchCategoryList.map((currentCategory, index) => {
                                return (
                                    <div key={index} className="item">
                                        <div className="name">
                                            <span className="n">
                                                {currentCategory}
                                            </span>
                                            <br />
                                            <span className="i">
                                                {
                                                    searchItems[currentCategory]
                                                        .length
                                                }{' '}
                                                items
                                            </span>
                                        </div>
                                        <div className="listItems">
                                            <Items
                                                data={
                                                    searchItems[currentCategory]
                                                }
                                            />
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="searchResultEmpty">
                                Search Result Empty
                            </div>
                        )}
                        <hr />
                    </>
                )}
                {categoryList.map((currentCategory, index) => {
                    return (
                        <div id={index + 1} key={index} className="item">
                            <div className="name">
                                <span className="n">{currentCategory}</span>
                                <br />
                                <span className="i">
                                    {items[categoryList[index]].length} items
                                </span>
                            </div>
                            <div className="listItems">
                                <Items data={items[currentCategory]} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ListByCategory;
