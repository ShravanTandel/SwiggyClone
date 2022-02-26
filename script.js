import { sideMenu } from "./models/menu.mjs"
import { menuItemList } from "./models/itemList.mjs"

(function (){

    // function to render the side menu
    function renderSideBarMenu(sideMenuListElement) {
        sideMenu.forEach( (menuItem, index) => {
            sideMenuListElement.innerHTML += 
                `<li><a href="#${index + 1}">${menuItem}</a></li>`
        })
    }

    function renderItems(itemRenderSpace) {
        sideMenu.forEach( (menuItem, index) => {
            // This variable stores the items in particular category
            const itemsInCategory = menuItemList.filter( (item) => {
                return item.category == menuItem;
            })

            // This variable is child component for storing items of same category
            let childComponent = "";
            let numberOfitems = itemsInCategory.length;

            itemsInCategory.forEach( (i) => {
                childComponent +=  `<div class="singleItem">
                <div class="left">
                    <div class="vegORnonveg">
                        Veg
                    </div>
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

            itemRenderSpace.innerHTML += `<div id="${index + 1}" class="item">
            <div class="name">
                <span class="n">${menuItem}</span><br>
                <span class="i">${numberOfitems} items</span>
            </div>
            <div class="listItems">
                ${ childComponent
            }
            </div>`
        })
    }

    function render() {
        // selecting div where we are rendering all the menu bar items
        const sideMenuListELement = document.querySelector(".menuAndCart .category")

        // function to render the side menu
        renderSideBarMenu(sideMenuListELement);

        // selecting div where we are rednering all items according to their category
        const itemRenderSpace = document.querySelector(".items")

        // function for rendering items
        renderItems(itemRenderSpace);
    }

    
    render();
})();