import { IMAGES } from "./image.mjs";
import { ItemBuilder } from "../Builder/itemBuilder.mjs";

const menuItemList = [
    new ItemBuilder()
    .setName("Whopper Fridays- Veg Doubles")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(298)
    .setDescription('2 Veg Whopper')
    .setImage(IMAGES["Whopper Fridays- Veg Doubles"])
    .setCategory("Recommanded"),

    new ItemBuilder()
    .setName("Whopper Fridays - Veg meal")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(327)
    .setDescription('Veg Whopper + King Fries + Pepsi')
    .setImage(IMAGES["Whopper Fridays - Veg meal"])
    .setCategory("Recommanded"),

    new ItemBuilder()
    .setName("Whopper Fridays- Mixed Doubles(Veg + Chicken)")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(328)
    .setDescription("1 Veg Whopper + 1 Chicken Whopper")
    .setImage(IMAGES["Whopper Fridays- Mixed Doubles(Veg + Chicken)"])
    .setCategory("Recommanded"),

    new ItemBuilder()
    .setName("Whopper Fridays - Veg Shake meal")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(387)
    .setDescription('Veg Whopper + King Fries + Shake')
    .setImage(IMAGES["Whopper Fridays - Veg Shake meal"])
    .setCategory("Whopper Friday (30% OFF)"),

    new ItemBuilder()
    .setName("Whopper Fridays - Chicken Shake meal")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(417)
    .setDescription('Chicken Whopper + King Fries + Shake')
    .setImage(IMAGES["Whopper Fridays - Chicken Shake meal"])
    .setCategory("Whopper Friday (30% OFF)"),

    new ItemBuilder()
    .setName("Whopper Fridays- Feast for 2(Veg)")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(555)
    .setDescription('2Veg Whopper + 1King Fries +2 Pepsi')
    .setImage(IMAGES["Whopper Fridays- Feast for 2(Veg)"])
    .setCategory("Whopper Friday (30% OFF)"),

    new ItemBuilder()
    .setName("Chicken Tandoor Grill Burger")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(149)
    .setDescription("Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onion with our unique corn dust buns. An indulgent treat from our King's Collection!")
    .setImage(IMAGES["Chicken Tandoor Grill Burger"])
    .setCategory("New Kings Collection Burgers"),

    new ItemBuilder()
    .setName("Cheese Melt Down Burger")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(169)
    .setDescription("Cheese oozing spicy veg patty, veggies and creamy sauce. An indulgent treat from our King's Collection!")
    .setImage(IMAGES["Cheese Melt Down Burger"])
    .setCategory("New Kings Collection Burgers"),

    new ItemBuilder()
    .setName("Fiery Chicken Burger")
    .setIsVeg(false)
    .setIsBestseller(true)
    .setPrice(179)
    .setDescription("Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!")
    .setImage(IMAGES["Fiery Chicken Burger"])
    .setCategory("New Kings Collection Burgers"),

    new ItemBuilder()
    .setName("2 Veg Whopper + 1Cheese Meltdown")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(467)
    .setDescription('2 Veg Whopper + 1Cheese Meltdown')
    .setImage(IMAGES["2 Veg Whopper + 1Cheese Meltdown"])
    .setCategory("Flavours of Love Combs"),

    new ItemBuilder()
    .setName("2 Cheese Meltdown + 1Classic Veg")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(417)
    .setDescription('2 Cheese Meltdown + 1Classic Veg')
    .setImage(IMAGES["2 Cheese Meltdown + 1Classic Veg"])
    .setCategory("Flavours of Love Combs"),

    new ItemBuilder()
    .setName("2 Chicken Whopper +1Fiery Chicken")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(537)
    .setDescription('2 Chicken Whopper +1Fiery Chicken')
    .setImage(IMAGES["2 Chicken Whopper +1Fiery Chicken"])
    .setCategory("Flavours of Love Combs"),

    new ItemBuilder()
    .setName("Mutton Whopper - Combo")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(428)
    .setDescription('Save Rs 35 |Make room for our fully loaded Whopper with a juicy, flame-grilled Mutton Patty, tangy pickles, fresh veggies, mayo and ketchup served in fresh 5" buns. Comes with Fries (M) + Pepsi (M)')
    .setImage(IMAGES["Mutton Whopper - Combo"])
    .setCategory("Home Delight Combs"),

    new ItemBuilder()
    .setName("Mutton Twisted Whopper Combo")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(468)
    .setDescription('Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M) + Pepsi (M)')
    .setImage(IMAGES["Mutton Twisted Whopper Combo"])
    .setCategory("Home Delight Combs"),

    new ItemBuilder()
    .setName("Crispy Chicken Combo")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(209)
    .setDescription('Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M) + Pepsi (M)')
    .setImage(IMAGES["Crispy Chicken Combo"])
    .setCategory("Home Delight Combs"),

    new ItemBuilder()
    .setName("Whopper Fridays- Veg Doubles")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(298)
    .setDescription('2 Veg Whopper')
    .setImage(IMAGES["Whopper Fridays- Veg Doubles"])
    .setCategory("Friends and Family Combo"),

    new ItemBuilder()
    .setName("Whopper Fridays - Veg meal")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(327)
    .setDescription('Veg Whopper + King Fries + Pepsi')
    .setImage(IMAGES["Whopper Fridays - Veg meal"])
    .setCategory("Friends and Family Combo"),

    new ItemBuilder()
    .setName("Whopper Fridays- Mixed Doubles(Veg + Chicken)")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(328)
    .setDescription("1 Veg Whopper + 1 Chicken Whopper")
    .setImage(IMAGES["Whopper Fridays- Mixed Doubles(Veg + Chicken)"])
    .setCategory("Friends and Family Combo"),

    new ItemBuilder()
    .setName("Whopper Fridays - Veg Shake meal")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(387)
    .setDescription('Veg Whopper + King Fries + Shake')
    .setImage(IMAGES["Whopper Fridays - Veg Shake meal"])
    .setCategory("Whopper"),

    new ItemBuilder()
    .setName("Whopper Fridays - Chicken Shake meal")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(417)
    .setDescription('Chicken Whopper + King Fries + Shake')
    .setImage(IMAGES["Whopper Fridays - Chicken Shake meal"])
    .setCategory("Whopper"),

    new ItemBuilder()
    .setName("Whopper Fridays- Feast for 2(Veg)")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(555)
    .setDescription('2Veg Whopper + 1King Fries +2 Pepsi')
    .setImage(IMAGES["Whopper Fridays- Feast for 2(Veg)"])
    .setCategory("Whopper"),

    new ItemBuilder()
    .setName("Chicken Tandoor Grill Burger")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(149)
    .setDescription("Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onion with our unique corn dust buns. An indulgent treat from our King's Collection!")
    .setImage(IMAGES["Chicken Tandoor Grill Burger"])
    .setCategory("Meal Comboss"),

    new ItemBuilder()
    .setName("Cheese Melt Down Burger")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(169)
    .setDescription("Cheese oozing spicy veg patty, veggies and creamy sauce. An indulgent treat from our King's Collection!")
    .setImage(IMAGES["Cheese Melt Down Burger"])
    .setCategory("Meal Comboss"),

    new ItemBuilder()
    .setName("Fiery Chicken Burger")
    .setIsVeg(false)
    .setIsBestseller(true)
    .setPrice(179)
    .setDescription("Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!")
    .setImage(IMAGES["Fiery Chicken Burger"])
    .setCategory("Meal Comboss"),

    new ItemBuilder()
    .setName("2 Veg Whopper + 1Cheese Meltdown")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(467)
    .setDescription('2 Veg Whopper + 1Cheese Meltdown')
    .setImage(IMAGES["2 Veg Whopper + 1Cheese Meltdown"])
    .setCategory("Burgers and Wraps"),

    new ItemBuilder()
    .setName("2 Cheese Meltdown + 1Classic Veg")
    .setIsVeg(true)
    .setIsBestseller(false)
    .setPrice(417)
    .setDescription('2 Cheese Meltdown + 1Classic Veg')
    .setImage(IMAGES["2 Cheese Meltdown + 1Classic Veg"])
    .setCategory("Burgers and Wraps"),

    new ItemBuilder()
    .setName("2 Chicken Whopper +1Fiery Chicken")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(537)
    .setDescription('2 Chicken Whopper +1Fiery Chicken')
    .setImage(IMAGES["2 Chicken Whopper +1Fiery Chicken"])
    .setCategory("Burgers and Wraps"),

    new ItemBuilder()
    .setName("Mutton Whopper - Combo")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(428)
    .setDescription('Save Rs 35 |Make room for our fully loaded Whopper with a juicy, flame-grilled Mutton Patty, tangy pickles, fresh veggies, mayo and ketchup served in fresh 5" buns. Comes with Fries (M) + Pepsi (M)')
    .setImage(IMAGES["Mutton Whopper - Combo"])
    .setCategory("What's New"),

    new ItemBuilder()
    .setName("Mutton Twisted Whopper Combo")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(468)
    .setDescription('Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M) + Pepsi (M)')
    .setImage(IMAGES["Mutton Twisted Whopper Combo"])
    .setCategory("What's New"),

    new ItemBuilder()
    .setName("Crispy Chicken Combo")
    .setIsVeg(false)
    .setIsBestseller(false)
    .setPrice(209)
    .setDescription('Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M) + Pepsi (M)')
    .setImage(IMAGES["Crispy Chicken Combo"])
    .setCategory("What's New"),

]

// console.log(menuItemList)

export default { menuItemList };