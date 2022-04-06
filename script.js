import { sideMenu } from './models/menu.js';
import { menuItemList } from './models/itemList.js';

(function () {
    let actions = {
        ADD: 'ADD',
        INCREASE_COUNT: 'INCREASE_COUNT',
        DECREASE_COUNT: 'DECREASE_COUNT',
    };

    let cart = [
        {
            name: 'Whopper Fridays- Veg Doubles',
            isVeg: true,
            price: 298,
            count: 2,
            pk: 1,
        },
    ];

    let filterVegOnly = false;

    // reducer function to change the state of cart
    function changeCartState(state, action, payload) {
        switch (action) {
            case actions.ADD:
                return [...state, payload];
            case actions.INCREASE_COUNT:
                var updatedCart = state;
                for (var i = 0; i < updatedCart.length; i++) {
                    if (updatedCart[i].pk == payload) {
                        updatedCart[i].count++;
                        break;
                    }
                }
                return updatedCart;
            case actions.DECREASE_COUNT:
                var updatedCart = state;
                for (let i = 0; i < updatedCart.length; i++) {
                    if (updatedCart[i].pk == payload) {
                        updatedCart[i].count--;
                        break;
                    }
                }
                return updatedCart;
        }
    }

    // function to render the side menu
    function renderSideBarMenu(sideMenuListElement) {
        sideMenuListElement.innerHTML = '';
        sideMenu.forEach((menuItem, index) => {
            sideMenuListElement.innerHTML += `<li><a href="#${
                index + 1
            }">${menuItem}</a></li>`;
        });
    }

    // function to render the items here it also checks for veg only if true it renders veg only if false it renders all
    function renderItems(itemRenderDiv, vegOnly) {
        itemRenderDiv.innerHTML = '';
        itemRenderDiv.innerHTML = `<div class="searchedResults"></div>`;
        sideMenu.forEach((menuItem, index) => {
            // // This variable stores the items in particular category
            let itemsInCategory;
            if (vegOnly == false) {
                itemsInCategory = menuItemList.filter((item) => {
                    return item.category == menuItem;
                });
            } else {
                itemsInCategory = menuItemList.filter((item) => {
                    return item.category == menuItem && item.isVeg == true;
                });
            }

            // This variable is child component for storing items of same category
            let childComponent = '';
            let numberOfitems = itemsInCategory.length;

            itemsInCategory.forEach((i) => {
                let flag = false;

                let itemInsideCart;
                cart.forEach((j) => {
                    if (j.pk == i.pk) {
                        flag = true;
                        itemInsideCart = j;
                    }
                });
                childComponent += `<div class="singleItem" pk = "${i.pk}">
                                        <div class="left">
                                            ${
                                                i.isVeg
                                                    ? "<div class = 'veg'>Veg</div>"
                                                    : "<div class = 'nonVeg'>Non Veg</div>"
                                            }
                                            <div class="foodName">
                                                ${i.name}
                                            </div>
                                            <div class="foodPrice">
                                                <span>₹</span> <span class = "price">${
                                                    i.price
                                                }</span>
                                            </div>
                                            <div class="combo">
                                                ${i.description}
                                            </div>
                                        </div>
                                        <div class="right">
                                            <div class="image">
                                                    <img src=${i.image} alt="">
                                                <div class = "button">
                                                ${
                                                    flag
                                                        ? `<div class = "addSub"><span class = "minus">-</span><span class = "count">${itemInsideCart.count}</span><span class = "plus">+</span></div>`
                                                        : `<div class = "add">ADD</div>`
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="line"></div>`;
            });

            if (childComponent != 0) {
                itemRenderDiv.innerHTML += `<div id="${index + 1}" class="item">
                                                <div class="name">
                                                    <span class="n">${menuItem}</span><br>
                                                    <span class="i">${numberOfitems} items</span>
                                                </div>
                                                <div class="listItems">
                                                    ${childComponent}
                                                </div>`;
            }
        });
    }

    // function to render cart items
    function renderCartItems(cartRenderDiv) {
        cartRenderDiv.innerHTML = '';
        let cartItems = cart.length;
        let subTotal = 0;
        cart.forEach((i) => {
            subTotal += i.count * i.price;
        });

        let cartItem = '';

        if (cartItems == 0) {
            cartRenderDiv.innerHTML = `<div class = "cart_name">
                                            <span class = "cart3">Cart Empty</span>
                                        </div>
                                        <div class = "cartEmptyImage">
                                            <img src = "./images/cartEmpty.png"><>
                                        </div>`;
        } else {
            cart.forEach((i) => {
                cartItem += `<div class="cart_item" pk = ${i.pk}>
                                <div class="cart_vegORnonveg">
                                    ${
                                        i.isVeg
                                            ? "<div class = 'veg'>Veg</div>"
                                            : "<div class = 'nonVeg'>Non Veg</div>"
                                    }
                                </div>
                                <div class="dishName">
                                    ${i.name}
                                </div>
                                <div class="addSub">
                                    <div class="minus">
                                        -
                                    </div>
                                    <div class="count">
                                        ${i.count}
                                    </div>
                                    <div class="plus">
                                        +
                                    </div>
                                </div>
                                <div class="price">
                                    ₹${i.price}
                                </div>
                            </div>`;
            });

            cartRenderDiv.innerHTML = `<div class="cart_name">
                                            <span class="cart1">Cart</span><br>
                                            <span class="cart2">${cartItems} Item</span>
                                        </div>
                                        <div class="cart_items">
                                            ${cartItem}
                                        </div>
                                        <div class="subTotal">
                                            <div class="sub">
                                                <span class="s1">SubTotal</span><br>
                                                <span class="s2">Extra charges may apply</span>
                                            </div>
                                            <div class="price">
                                                ₹${subTotal}
                                            </div>
                                        </div>
                                        <div class="checkout">
                                            <button class="button">Checkout</button>
                                        </div>`;
        }
    }

    // function to render nav bar
    function renderNavbar(navbarElement) {
        navbarElement.innerHTML = `<div class="rightSide">
                                        <div class="logo">
                                            <h4>Swiggy</h4>
                                        </div>
                                        <div class="location">
                                            Bangalore
                                        </div>
                                    </div>
                                    <ul class="nav-link">
                                        <li>
                                            <a href="#"><span></span>Search</a>
                                        </li>
                                        <li>
                                            <a href="#"><span></span>Offers</a>
                                        </li>
                                        <li>
                                            <a href="#"><span></span>Help</a>
                                        </li>
                                        <li>
                                            <a href="#"><span></span>Sign In</a>
                                        </li>
                                        <li>
                                            <a href="#"><span class = "cartCount">${cart.length}</span> Cart</a>
                                        </li>
                                    </ul>`;
    }

    // this function will add the item to the cart
    function addToCart(e) {
        const itemPk = e.path[4].attributes[1].value;
        const itemVegOrNonveg = e.path[4].children[0].children[0].innerText;
        const itemName = e.path[4].children[0].children[1].innerText;
        const itemPrice =
            e.path[4].children[0].children[2].children[1].innerText;
        const cartItem = {
            name: itemName,
            isVeg: itemVegOrNonveg === 'Veg' ? true : false,
            price: itemPrice,
            count: 1,
            pk: itemPk,
        };
        let updatedCart = changeCartState(cart, actions.ADD, cartItem);
        cart = updatedCart;
        render();
    }

    // function to decrease the count of the items added to cart in items
    function decreaseCountInItems(e) {
        const itemPk = e.path[5].attributes[1].value;

        let updatedCart = changeCartState(cart, actions.DECREASE_COUNT, itemPk);

        cart = updatedCart;
        render();
    }

    // function to decrease the count of the items added to cart in cart
    function decreaseCountInCartItem(e) {
        const itemPk = e.path[2].attributes[1].value;

        let updatedCart = changeCartState(cart, actions.DECREASE_COUNT, itemPk);

        cart = updatedCart;
        render();
    }

    // function to increase the count of the items added to cart in items
    function increaseCountInItems(e) {
        const itemPk = e.path[5].attributes[1].value;

        let updatedCart = changeCartState(cart, actions.INCREASE_COUNT, itemPk);

        cart = updatedCart;
        render();
    }

    // function to increase the count of the items added to cart in cart
    function increaseCountInCartItem(e) {
        const itemPk = e.path[2].attributes[1].value;

        let updatedCart = changeCartState(cart, actions.INCREASE_COUNT, itemPk);

        cart = updatedCart;
        render();
    }

    // function to render the searched result
    function renderSearchResult(searchInput) {
        let searchedResultDiv = document.querySelector(
            '.menuAndCart .items .searchedResults'
        );
        searchedResultDiv.innerHTML = '';

        // Here we will render the search result if the search input is out empty
        if (searchInput.length != 0) {
            searchedResultDiv.innerHTML = `<div class = "searchResult-name">Search Result</div>`;

            // This variable is to count the number of components inside the search result which will help to display empty in search result if value is 0
            let componentsInsideSearchResult = 0;
            sideMenu.forEach((menuItem, index) => {
                // // This variable stores the items in particular category
                let itemsInCategory;
                if (filterVegOnly == false) {
                    itemsInCategory = menuItemList.filter((item) => {
                        return (
                            item.category == menuItem &&
                            item.name
                                .toUpperCase()
                                .indexOf(searchInput.toUpperCase()) > -1
                        );
                    });
                } else {
                    itemsInCategory = menuItemList.filter((item) => {
                        return (
                            item.category == menuItem &&
                            item.isVeg == true &&
                            item.name
                                .toUpperCase()
                                .indexOf(searchInput.toUpperCase()) > -1
                        );
                    });
                }

                // This variable is child component for storing items of same category
                let childComponent = '';
                let numberOfitems = itemsInCategory.length;

                itemsInCategory.forEach((i) => {
                    let flag = false;

                    let itemInsideCart;
                    cart.forEach((j) => {
                        if (j.pk == i.pk) {
                            flag = true;
                            itemInsideCart = j;
                        }
                    });
                    childComponent += `<div class="singleItem" pk = "${i.pk}">
                                            <div class="left">
                                                    ${
                                                        i.isVeg
                                                            ? "<div class = 'veg'>Veg</div>"
                                                            : "<div class = 'nonVeg'>Non Veg</div>"
                                                    }
                                                <div class="foodName">
                                                    ${i.name}
                                                </div>
                                                <div class="foodPrice">
                                                    <span>₹</span> <span class = "price">${
                                                        i.price
                                                    }</span>
                                                </div>
                                                <div class="combo">
                                                    ${i.description}
                                                </div>
                                            </div>
                                            <div class="right">
                                                <div class="image">
                                                        <img src=${
                                                            i.image
                                                        } alt="">
                                                    <div class = "buttonSearch">
                                                    ${
                                                        flag
                                                            ? `<div class = "addSub"><span class = "minus">-</span><span class = "count">${itemInsideCart.count}</span><span class = "plus">+</span></div>`
                                                            : `<div class = "add">ADD</div>`
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="line"></div>`;
                });

                if (childComponent != 0) {
                    componentsInsideSearchResult++;
                    searchedResultDiv.innerHTML += `<div class="item">
                                                        <div class="name">
                                                            <span class="n">${menuItem}</span><br>
                                                            <span class="i">${numberOfitems} items</span>
                                                        </div>
                                                        <div class="listItems">
                                                            ${childComponent}
                                                        </div>`;
                }
            });

            // if the search result is empty we will display empty message
            if (componentsInsideSearchResult == 0) {
                searchedResultDiv.innerHTML += `<div class = "searchResultEmpty">Search Result Empty</div>`;
            }
            searchedResultDiv.innerHTML += `<div class="line"></div>`;
        }
        initOnSearch();
    }

    // function to render the veg only items
    function renderVegOnly(e) {
        const itemRenderDiv = document.querySelector('.items');
        const searchBarInput = document.querySelector(
            '.searchbar-and-checkboxes .searchbar-and-checkboxes-1 .searchbar input'
        );
        const checked = e.path[0].checked;
        if (checked == true) {
            filterVegOnly = true;
            renderItems(itemRenderDiv, filterVegOnly);
            renderSearchResult(searchBarInput.value);
            initForButtonsInItems();
            initOnSearch();
        } else {
            filterVegOnly = false;
            renderItems(itemRenderDiv, filterVegOnly);
            renderSearchResult(searchBarInput.value);
            initForButtonsInItems();
            initOnSearch();
        }
    }

    // function to initialise the event listeners to buttons in search result
    function initOnSearch() {
        // selecting all the add buttons in item
        const addButton = document.querySelectorAll(
            '.searchedResults .singleItem .right .buttonSearch .add'
        );

        // giving each add button a event listener
        for (var i = 0; i < addButton.length; i++) {
            addButton[i].addEventListener('click', (e) => {
                addToCart(e);
            });
        }

        // selecting minus button of items in the rendered items
        const minusButtonInItems = document.querySelectorAll(
            '.searchedResults .singleItem .right .image .buttonSearch .addSub .minus'
        );

        // giving each minus button of items in rendered items event listener
        for (var i = 0; i < minusButtonInItems.length; i++) {
            minusButtonInItems[i].addEventListener('click', (e) => {
                decreaseCountInItems(e);
            });
        }

        const plusButtonInItems = document.querySelectorAll(
            '.searchedResults .singleItem .right .image .buttonSearch .addSub .plus'
        );

        for (var i = 0; i < plusButtonInItems.length; i++) {
            plusButtonInItems[i].addEventListener('click', (e) => {
                increaseCountInItems(e);
            });
        }
    }

    // function to add the cart itmes to local storage and empty the cart
    function addTheCartItemsToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
        cart = [];
        render();
    }

    // function to initialise the event listeners to buttons in items
    function initForButtonsInItems() {
        // selecting all the add buttons in item
        const addButton = document.querySelectorAll(
            '.singleItem .right .button .add'
        );

        // giving each add button a event listener
        for (var i = 0; i < addButton.length; i++) {
            addButton[i].addEventListener('click', (e) => {
                addToCart(e);
            });
        }

        // selecting minus button of items in the rendered items
        const minusButtonInItems = document.querySelectorAll(
            '.singleItem .right .image .button .addSub .minus'
        );

        // giving each minus button of items in rendered items event listener
        for (var i = 0; i < minusButtonInItems.length; i++) {
            minusButtonInItems[i].addEventListener('click', (e) => {
                decreaseCountInItems(e);
            });
        }

        const plusButtonInItems = document.querySelectorAll(
            '.singleItem .right .image .button .addSub .plus'
        );

        for (var i = 0; i < plusButtonInItems.length; i++) {
            plusButtonInItems[i].addEventListener('click', (e) => {
                increaseCountInItems(e);
            });
        }
    }

    // ths function is to initialise the variables and functions
    function init() {
        initForButtonsInItems();

        const minusButtonInCartItems = document.querySelectorAll(
            '.cart_item .addSub .minus'
        );

        for (var i = 0; i < minusButtonInCartItems.length; i++) {
            minusButtonInCartItems[i].addEventListener('click', (e) => {
                decreaseCountInCartItem(e);
            });
        }

        const plusButtonInCartItems = document.querySelectorAll(
            '.cart_item .addSub .plus'
        );

        for (var i = 0; i < plusButtonInCartItems.length; i++) {
            plusButtonInCartItems[i].addEventListener('click', (e) => {
                increaseCountInCartItem(e);
            });
        }

        const vegOrNonvegCheckbox = document.querySelector(
            '.searchbar-and-checkboxes .searchbar-and-checkboxes-1 .veg-or-nonveg .checkbox-div input'
        );

        vegOrNonvegCheckbox.addEventListener('click', (e) => {
            renderVegOnly(e);
        });

        const searchBarInput = document.querySelector(
            '.searchbar-and-checkboxes .searchbar-and-checkboxes-1 .searchbar input'
        );

        searchBarInput.addEventListener('input', () => {
            renderSearchResult(searchBarInput.value);
        });

        if (cart.length != 0) {
            const checkoutButton = document.querySelector('.checkout button');

            checkoutButton.addEventListener('click', () => {
                addTheCartItemsToLocalStorage();
            });
        }
    }

    function render() {
        const body = document.querySelector('body');
        // body.innerHTML = ""

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].count == 0) {
                cart.splice(i, 1);
            }
        }

        // selecting div where we are rendering all the menu bar items
        const sideMenuListELement = document.querySelector(
            '.menuAndCart .category'
        );

        // function to render the side menu
        renderSideBarMenu(sideMenuListELement);

        // selecting div where we are rednering all items according to their category
        const itemRenderDiv = document.querySelector('.items');

        // function for rendering items
        renderItems(itemRenderDiv, filterVegOnly);

        // selecting div where we are rendering all the cart items
        const cartRenderDiv = document.querySelector('.menuAndCart .cart');

        renderCartItems(cartRenderDiv);

        // selecting div where we are rendering navbar
        const navbarElement = document.querySelector('nav');

        // function for rendering navbar
        renderNavbar(navbarElement);

        const searchBarInput = document.querySelector(
            '.searchbar-and-checkboxes .searchbar-and-checkboxes-1 .searchbar input'
        );

        renderSearchResult(searchBarInput.value);

        init();
    }

    window.onload = () => {
        localStorage.removeItem('cart');
        render();
    };
})();
