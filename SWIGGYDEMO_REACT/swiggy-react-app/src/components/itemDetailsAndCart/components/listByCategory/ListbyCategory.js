import './listByCategory.style.css';

import React, { useEffect, useState } from 'react';
import Items from './components/items';
import { useSelector } from 'react-redux';

function ListByCategory({
    data,
    category,
    cartItems,
    onClickADD,
    onClickPlus,
    onClickMinus,
    isVeg,
    searchInputText,
    onFilter,
}) {
    const items = useSelector((state) => state.items);
    const reducerCategory = useSelector((state) => state.categoryList);

    // const i = reducerCategory.map((c, o) => {
    //     console.log(items[c]);
    //     return '1';
    // });

    const [searchResultItems, setSearchResultItems] = useState([]);

    const [categoryListForSearch, setCategoryListForSearch] = useState([
        category,
    ]);

    const [categoryListForFilter, setCategoryListForFilter] = useState([
        category,
    ]);

    let arrayOfItemsOrderedByCategory = [];

    category.forEach((i, index) => {
        let arrayOfItems = [];
        arrayOfItems = data.filter((d) => {
            return d.category === i;
        });
        arrayOfItemsOrderedByCategory[index] = arrayOfItems;
    });

    const [itemsOrderedByCategory, setItemsOrderedByCategory] = useState([
        ...arrayOfItemsOrderedByCategory,
    ]);

    function updateItems() {
        let arrayOfSearchedItems = [];
        let arrayOfVegOnlyItems = [];

        let searchCat = [];
        let filterCat = [];

        if (isVeg) {
            category.forEach((i) => {
                let arrayOfItems = [];
                arrayOfItems = data.filter((d) => {
                    return (
                        d.category === i &&
                        d.name
                            .toUpperCase()
                            .indexOf(searchInputText.toUpperCase()) > -1 &&
                        d.isVeg === true
                    );
                });
                if (arrayOfItems.length !== 0) {
                    arrayOfSearchedItems.push(arrayOfItems);
                    searchCat.push(i);
                }
            });

            category.forEach((i) => {
                let arrayOfItems = [];
                arrayOfItems = data.filter((d) => {
                    return d.category === i && d.isVeg;
                });
                if (arrayOfItems.length !== 0) {
                    arrayOfVegOnlyItems.push(arrayOfItems);
                    filterCat.push(i);
                }
            });
        } else {
            category.forEach((i) => {
                let arrayOfItems = [];
                arrayOfItems = data.filter((d) => {
                    return (
                        d.category === i &&
                        d.name
                            .toUpperCase()
                            .indexOf(searchInputText.toUpperCase()) > -1
                    );
                });
                if (arrayOfItems.length !== 0) {
                    arrayOfSearchedItems.push(arrayOfItems);
                    searchCat.push(i);
                }
            });

            category.forEach((i) => {
                let arrayOfItems = [];
                arrayOfItems = data.filter((d) => {
                    return d.category === i;
                });
                if (arrayOfItems.length !== 0) {
                    arrayOfVegOnlyItems.push(arrayOfItems);
                    filterCat.push(i);
                }
            });
        }
        setSearchResultItems([...arrayOfSearchedItems]);
        setItemsOrderedByCategory([...arrayOfVegOnlyItems]);

        setCategoryListForSearch([...searchCat]);
        setCategoryListForFilter([...filterCat]);

        onFilter(filterCat);
    }

    useEffect(() => {
        updateItems();
    }, [isVeg, searchInputText]);

    return (
        <>
            {searchInputText.length === 0 ? (
                <div className="items">
                    {reducerCategory.map((currentCategory, index) => {
                        return (
                            <div id={index + 1} key={index} className="item">
                                <div className="name">
                                    <span className="n">{currentCategory}</span>
                                    <br />
                                    <span className="i">
                                        {items[reducerCategory[index]].length}
                                        items
                                    </span>
                                </div>
                                <div className="listItems">
                                    <Items
                                        data={items[currentCategory]}
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
            ) : (
                <div className="items">
                    <div className="searchResult-name">Search Result</div>
                    {searchResultItems.length !== 0 ? (
                        categoryListForSearch.map((currentCategory, index) => {
                            return (
                                <div key={index} className="item">
                                    <div className="name">
                                        <span className="n">
                                            {currentCategory}
                                        </span>
                                        <br />
                                        <span className="i">
                                            {searchResultItems[index].length}{' '}
                                            items
                                        </span>
                                    </div>
                                    <div className="listItems">
                                        <Items
                                            data={searchResultItems[index]}
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
                        <div className="searchResultEmpty">
                            Search Result Empty
                        </div>
                    )}
                    <hr />

                    {categoryListForFilter.map((currentCategory, index) => {
                        if (itemsOrderedByCategory[index].length !== 0) {
                            return (
                                <div
                                    id={index + 1}
                                    key={index}
                                    className="item"
                                >
                                    <div className="name">
                                        <span className="n">
                                            {currentCategory}
                                        </span>
                                        <br />
                                        <span className="i">
                                            {
                                                itemsOrderedByCategory[index]
                                                    .length
                                            }{' '}
                                            items
                                        </span>
                                    </div>
                                    <div className="listItems">
                                        <Items
                                            data={itemsOrderedByCategory[index]}
                                            cartItems={cartItems}
                                            onClickADD={onClickADD}
                                            onClickPlus={onClickPlus}
                                            onClickMinus={onClickMinus}
                                        />
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </>
    );
}

export default ListByCategory;
