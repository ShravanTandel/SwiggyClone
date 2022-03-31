import './listByCategory.style.css';

import React, { useEffect, useMemo } from 'react';
import Items from './components/items';
import { menuItemList } from '../../../../models/itemList';
import { sideMenu } from '../../../../models/menu';
import _ from 'lodash';

function ListByCategory({
    cartItems,
    onClickADD,
    onClickPlus,
    onClickMinus,
    isVeg,
    searchInputText,
    onFilter,
}) {
    const getFilteredAndSearchedItemsAndCategory = (
        isVeg,
        searchInputText,
        menuItemList,
        sideMenu
    ) => {
        const getFilteredItemsAndCategory = () => {
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

        const [
            filteredItems,
            filteredCategory,
            filteredItemsArray,
        ] = getFilteredItemsAndCategory();

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

    const [
        filteredItems,
        filteredCategory,
        searchedItems,
        searchedCategory,
    ] = useMemo(() => {
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
                    <div className="searchResult-name">Search Result</div>
                    {searchedCategory.length !== 0 ? (
                        searchedCategory.map((currentCategory, index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="name_and_length">
                                        <span className="name">
                                            {currentCategory}
                                        </span>
                                        <br />
                                        <span className="length">
                                            {
                                                searchedItems[currentCategory]
                                                    .length
                                            }{' '}
                                            items
                                        </span>
                                    </div>
                                    <div className="listItems">
                                        <Items
                                            data={
                                                searchedItems[currentCategory]
                                            }
                                            cartItems={cartItems}
                                            onClickADD={onClickADD}
                                            onClickPlus={onClickPlus}
                                            onClickMinus={onClickMinus}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <div className="searchResultEmpty">
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
                        <div className="name_and_length">
                            <span className="name">{currentCategory}</span>
                            <br />
                            <span className="length">
                                {filteredItems[currentCategory].length} items
                            </span>
                        </div>
                        <div className="listItems">
                            <Items
                                data={filteredItems[currentCategory]}
                                cartItems={cartItems}
                                onClickADD={onClickADD}
                                onClickPlus={onClickPlus}
                                onClickMinus={onClickMinus}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListByCategory;
