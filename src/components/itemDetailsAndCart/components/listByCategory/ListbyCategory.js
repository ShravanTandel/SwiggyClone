import './listByCategory.style.css';

import React, { useEffect, useMemo } from 'react';
import Items from './components/items';
import { menuItemList } from '../../../../models/itemList';
import { sideMenu } from '../../../../models/menu';
import _ from 'lodash';

function ListByCategory({ isVeg, searchInputText, onFilter }) {
    const getFilteredItemsAndCategory = (isVeg, menuItemList, sideMenu) => {
        if (isVeg) {
            const filteredItemsArray = menuItemList.filter((item) => {
                return item.isVeg === true;
            });

            const filteredItems = _.groupBy(filteredItemsArray, 'category');
            const filteredCategory = Object.keys(filteredItems);

            return [filteredItems, filteredCategory, filteredItemsArray];
        } else {
            const filteredItems = _.groupBy(menuItemList, 'category');
            const filteredCategory = sideMenu;

            return [filteredItems, filteredCategory, menuItemList];
        }
    };

    const getFilteredAndSearchedItemsAndCategory = (
        isVeg,
        searchInputText,
        menuItemList,
        sideMenu
    ) => {
        const [filteredItems, filteredCategory, filteredItemsArray] =
            getFilteredItemsAndCategory(isVeg, menuItemList, sideMenu);

        if (searchInputText.length !== 0) {
            const searchedItemsArray = filteredItemsArray.filter((item) => {
                return (
                    item.name
                        .toUpperCase()
                        .indexOf(searchInputText.toUpperCase()) > -1
                );
            });

            const searchedItems = _.groupBy(searchedItemsArray, 'category');
            const searchedCategory = Object.keys(searchedItems);

            return [
                filteredItems,
                filteredCategory,
                searchedItems,
                searchedCategory,
            ];
        }
        return [filteredItems, filteredCategory, {}, []];
    };

    const [filteredItems, filteredCategory, searchedItems, searchedCategory] =
        useMemo(() => {
            return getFilteredAndSearchedItemsAndCategory(
                isVeg,
                searchInputText,
                menuItemList,
                sideMenu
            );
        }, [isVeg, searchInputText]);

    useEffect(() => {
        onFilter(filteredCategory);
    }, [isVeg]);

    return (
        <div className="items">
            {searchInputText.length !== 0 ? (
                <>
                    <div className="items__search-result__name">
                        Search Result
                    </div>
                    {searchedCategory.length !== 0 ? (
                        searchedCategory.map((currentCategory, index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="item__name-and-length">
                                        <span className="item__name">
                                            {currentCategory}
                                        </span>
                                        <br />
                                        <span className="item__length">
                                            {
                                                searchedItems[currentCategory]
                                                    .length
                                            }{' '}
                                            items
                                        </span>
                                    </div>
                                    <div className="item__list">
                                        <Items
                                            data={
                                                searchedItems[currentCategory]
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <div className="search-result-empty">
                                Search Result Empty
                            </div>
                            <hr></hr>
                        </>
                    )}
                </>
            ) : null}
            {filteredCategory.map((currentCategory, index) => {
                return (
                    <div id={index + 1} key={index} className="item">
                        <div className="item__name-and-length">
                            <span className="item__name">
                                {currentCategory}
                            </span>
                            <br />
                            <span className="item__length">
                                {filteredItems[currentCategory].length} items
                            </span>
                        </div>
                        <div className="item__list">
                            <Items data={filteredItems[currentCategory]} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListByCategory;
