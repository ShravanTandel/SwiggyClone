import { IMAGES } from './image.js';
import { ItemBuilder } from '../Builder/itemBuilder.js';
import { itemData } from './itemsDate.js';

const menuItemList = [];

itemData.forEach((i) => {
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
            .build()
    );
});

export { menuItemList };
