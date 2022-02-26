import { sideMenu } from "./models/menu.mjs"
import { menuItemList } from "./models/itemList.mjs"

(function () {

    let cart = [
        {
            name: "Whopper Fridays- Veg Doubles",
            isVeg: true,
            price: 298,
            count: 2,
        },
    ]

    // function to render the side menu
    function renderSideBarMenu(sideMenuListElement) {
        sideMenu.forEach((menuItem, index) => {
            sideMenuListElement.innerHTML +=
                `<li><a href="#${index + 1}">${menuItem}</a></li>`
        })
    }

    function renderItems(itemRenderDiv) {
        sideMenu.forEach((menuItem, index) => {
            // This variable stores the items in particular category
            const itemsInCategory = menuItemList.filter((item) => {
                return item.category == menuItem;
            })

            // This variable is child component for storing items of same category
            let childComponent = "";
            let numberOfitems = itemsInCategory.length;

            itemsInCategory.forEach((i) => {
                childComponent += `<div class="singleItem">
                <div class="left">
                    ${i.isVeg ? "<div class = 'veg'>Veg</div>" : "<div class = 'nonVeg'>Non Veg</div>"}
                    <div class="foodName">
                        ${i.name}
                    </div>
                    <div class="foodPrice">
                        ₹ ${i.price}
                    </div>
                    <div class="combo">
                        ${i.description}
                    </div>
                </div>
                <div class="right">
                    <div class="image">
                        <img src=${i.image} alt="">
                    </div>
                    <button class="add">Add</button>
                </div>
            </div>
            <div class="line"></div>`
            })

            itemRenderDiv.innerHTML += `<div id="${index + 1}" class="item">
            <div class="name">
                <span class="n">${menuItem}</span><br>
                <span class="i">${numberOfitems} items</span>
            </div>
            <div class="listItems">
                ${childComponent
                }
            </div>`
        })
    }

    function renderCartItems(cartRenderDiv) {
        let cartItems = cart.length;
        let subTotal = 0;
        cart.forEach((i) => {
            subTotal += (i.count * i.price);
        })

        let cartItem = "";

        cart.forEach( (i) => {
            cartItem += `<div class="cart_item">
            <div class="cart_vegORnonveg">
                ${ i.isVeg ? "<div class = 'veg'>Veg</div>" : "<div class = 'nonVeg'>Non Veg</div>"}
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
        </div>`
        })

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
    </div>`
    }

    function render() {
        // selecting div where we are rendering all the menu bar items
        const sideMenuListELement = document.querySelector(".menuAndCart .category")

        // function to render the side menu
        renderSideBarMenu(sideMenuListELement);

        // selecting div where we are rednering all items according to their category
        const itemRenderDiv = document.querySelector(".items")

        // function for rendering items
        renderItems(itemRenderDiv);

        // selecting div where we are rendering all the cart items
        const cartRenderDiv = document.querySelector(".menuAndCart .cart");

        renderCartItems(cartRenderDiv);
    }


    render();
})();