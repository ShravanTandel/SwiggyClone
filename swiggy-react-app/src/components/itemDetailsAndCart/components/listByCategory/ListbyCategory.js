import './listByCategory.style.css';

import React, { useEffect, useState } from 'react';
import Items from './components/items';

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
        <div className="items">
            {searchInputText.length !== 0
                ? categoryListForSearch.map((currentCategory, index) => {
                      return (
                          <div key={index} className="item">
                              <div className="name">
                                  <span className="n">{currentCategory}</span>
                                  <br />
                                  <span className="i">
                                      {searchResultItems[index].length} items
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
                : ''}
            {categoryListForFilter.map((currentCategory, index) => {
                return (
                    <div id={index + 1} key={index} className="item">
                        <div className="name">
                            <span className="n">{currentCategory}</span>
                            <br />
                            <span className="i">
                                {itemsOrderedByCategory[index].length} items
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
            })}
        </div>
    );
}

export default ListByCategory;
