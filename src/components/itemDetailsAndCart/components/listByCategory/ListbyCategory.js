import './listByCategory.style.css';

import React, { useEffect, useMemo } from 'react';
import Items from './components/items';
import { connect } from 'react-redux';
import updateSearchItemsWithCategoryList from '../../../../actions/searchItemsWithCategoryActionCreator';
import updateItemsWithCategoryList from '../../../../actions/itemsWithCategoryActionCreator';
import { menuItemList } from '../../../../models/itemList';
import { sideMenu } from '../../../../models/menu';
import _ from 'lodash';

function ListByCategory({
    itemsWithCategory,
    searchItemsWithCategory,
    isVeg,
    searchInputText,
    updateSearchItemsWithCategoryList,
    updateItemsWithCategoryList,
}) {
    const { items, categoryList } = itemsWithCategory;
    const { searchItems, searchCategoryList } = searchItemsWithCategory;

    let itemsDetails = useMemo(() => {
        return _.groupBy(menuItemList, 'category');
    }, [menuItemList]);
    let categoryListForOriginalItems = sideMenu;

    function updateItemsAndCategoryList() {
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
            updateSearchItemsWithCategoryList(
                updatedSearchItems,
                searchCategoryList
            );
        }
        updateItemsWithCategoryList(itemsDetails, categoryListForOriginalItems);
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
                            <div className="name_and_length">
                                <span className="name">{currentCategory}</span>
                                <br />
                                <span className="length">
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

const mapStateToProps = (state) => {
    return {
        itemsWithCategory: state.itemsWithCategory,
        searchItemsWithCategory: state.searchItemsWithCategory,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateItemsWithCategoryList: (
            itemsDetails,
            categoryListForOriginalItems
        ) =>
            dispatch(
                updateItemsWithCategoryList(
                    itemsDetails,
                    categoryListForOriginalItems
                )
            ),
        updateSearchItemsWithCategoryList: (
            updatedSearchItems,
            searchCategoryList
        ) =>
            dispatch(
                updateSearchItemsWithCategoryList(
                    updatedSearchItems,
                    searchCategoryList
                )
            ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListByCategory);
