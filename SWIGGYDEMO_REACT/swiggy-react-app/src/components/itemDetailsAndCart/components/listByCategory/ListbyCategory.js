import './listByCategory.style.css';

import React, { useEffect } from 'react';
import Items from './components/items';
import { connect } from 'react-redux';
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

function ListByCategory(props) {
    const { items, categoryList } = props.itemsWithCategory;
    const { searchItems, searchCategoryList } = props.searchItemsWithCategory;

    function updateItemsAndCategoryList() {
        let itemsDetails = groupBy('category', menuItemList);
        let categoryListForOriginalItems = sideMenu;

        if (props.isVeg === true) {
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

        if (props.searchInputText.length !== 0) {
            const updatedSearchItems = {};
            const searchCategoryList = [];
            categoryListForOriginalItems.forEach((cat) => {
                updatedSearchItems[cat] = itemsDetails[cat].filter((item) => {
                    return (
                        item.name
                            .toUpperCase()
                            .indexOf(props.searchInputText.toUpperCase()) > -1
                    );
                });
                if (updatedSearchItems[cat].length === 0) {
                    delete updatedSearchItems[cat];
                } else {
                    searchCategoryList.push(cat);
                }
            });
            props.updateSearchItemsWithCategoryList(
                updatedSearchItems,
                searchCategoryList
            );
        }
        props.updateItemsWithCategoryList(
            itemsDetails,
            categoryListForOriginalItems
        );
    }

    useEffect(() => {
        updateItemsAndCategoryList();
    }, [props.isVeg, props.searchInputText]);

    return (
        <>
            <div className="items">
                {props.searchInputText.length === 0 ? (
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
