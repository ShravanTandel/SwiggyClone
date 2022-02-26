import { sideMenu } from "./models/menu.mjs"

(function (){

    // function to render the side menu
    function renderSideBarMenu(sideMenuListElement) {
        sideMenu.forEach( (menuItem, index) => {
            sideMenuListElement.innerHTML += 
                `<li><a href="#${index + 1}">${menuItem}</a></li>`
        })
    }
    function render() {
        const sideMenuListELement = document.querySelector(".menuAndCart .category")

        // function to render the side menu
        renderSideBarMenu(sideMenuListELement);
    }

    
    render();
})();