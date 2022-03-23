import { IMAGES } from "./image.mjs";
import { ItemBuilder } from "../Builder/itemBuilder.mjs";
import { itemData } from "./itemsDate.mjs";

const menuItemList = []

itemData.forEach( (i) => {
    menuItemList.push(
        new ItemBuilder()
        .setName(i.name)
        .setIsVeg(i.isVeg)
        .setIsBestseller(i.isBestseller)
        .setPrice(i.price)
        .setDescription(i.description)
        .setImage(IMAGES[i.image])
        .setCategory(i.category)
        .setPk(i.pk)
        .build(),
    )
})

// console.log(menuItemList)

export { menuItemList };