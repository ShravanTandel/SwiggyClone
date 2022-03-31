const itemData = [
    {
        name: 'Whopper Fridays- Veg Doubles',
        isVeg: true,
        isBestseller: false,
        price: 298,
        description: '2 Veg Whopper',
        image: 'Whopper Fridays- Veg Doubles',
        category: 'Recommanded',
        primaryKey: 1,
    },

    {
        name: 'Whopper Fridays - Veg meal',
        isVeg: true,
        isBestseller: false,
        price: 327,
        description: 'Veg Whopper + King Fries + Pepsi',
        image: 'Whopper Fridays - Veg meal',
        category: 'Recommanded',
        primaryKey: 2,
    },

    {
        name: 'Whopper Fridays- Mixed Doubles(Veg + Chicken)',
        isVeg: false,
        isBestseller: false,
        price: 328,
        description: '1 Veg Whopper + 1 Chicken Whopper',
        image: 'Whopper Fridays- Mixed Doubles(Veg + Chicken)',
        category: 'Recommanded',
        primaryKey: 3,
    },

    {
        name: 'Whopper Fridays - Veg Shake meal',
        isVeg: true,
        isBestseller: false,
        price: 387,
        description: 'Veg Whopper + King Fries + Shake',
        image: 'Whopper Fridays - Veg Shake meal',
        category: 'Whopper Friday (30% OFF)',
        primaryKey: 4,
    },

    {
        name: 'Whopper Fridays - Chicken Shake meal',
        isVeg: false,
        isBestseller: false,
        price: 417,
        description: 'Chicken Whopper + King Fries + Shake',
        image: 'Whopper Fridays - Chicken Shake meal',
        category: 'Whopper Friday (30% OFF)',
        primaryKey: 5,
    },

    {
        name: 'Whopper Fridays- Feast for 2(Veg)',
        isVeg: true,
        isBestseller: false,
        price: 555,
        description: '2Veg Whopper + 1King Fries +2 Pepsi',
        image: 'Whopper Fridays- Feast for 2(Veg)',
        category: 'Whopper Friday (30% OFF)',
        primaryKey: 6,
    },

    {
        name: 'Chicken Tandoor Grill Burger',
        isVeg: false,
        isBestseller: false,
        price: 149,
        description:
            "Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onion with our unique corn dust buns. An indulgent treat from our King's Collection!",
        image: 'Chicken Tandoor Grill Burger',
        category: 'New Kings Collection Burgers',
        primaryKey: 7,
    },

    {
        name: 'Cheese Melt Down Burger',
        isVeg: true,
        isBestseller: false,
        price: 169,
        description:
            "Cheese oozing spicy veg patty, veggies and creamy sauce. An indulgent treat from our King's Collection!",
        image: 'Cheese Melt Down Burger',
        category: 'New Kings Collection Burgers',
        primaryKey: 8,
    },

    {
        name: 'Fiery Chicken Burger',
        isVeg: false,
        isBestseller: true,
        price: 179,
        description:
            "Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!",
        image: 'Fiery Chicken Burger',
        category: 'New Kings Collection Burgers',
        primaryKey: 9,
    },

    {
        name: '2 Veg Whopper + 1Cheese Meltdown',
        isVeg: true,
        isBestseller: false,
        price: 467,
        description: '2 Veg Whopper + 1Cheese Meltdown',
        image: '2 Veg Whopper + 1Cheese Meltdown',
        category: 'Flavours of Love Combs',
        primaryKey: 10,
    },

    {
        name: '2 Cheese Meltdown + 1Classic Veg',
        isVeg: true,
        isBestseller: false,
        price: 417,
        description: '2 Cheese Meltdown + 1Classic Veg',
        image: '2 Cheese Meltdown + 1Classic Veg',
        category: 'Flavours of Love Combs',
        primaryKey: 11,
    },

    {
        name: '2 Chicken Whopper +1Fiery Chicken',
        isVeg: false,
        isBestseller: false,
        price: 537,
        description: '2 Chicken Whopper +1Fiery Chicken',
        image: '2 Chicken Whopper +1Fiery Chicken',
        category: 'Flavours of Love Combs',
        primaryKey: 12,
    },

    {
        name: 'Mutton Whopper - Combo',
        isVeg: false,
        isBestseller: false,
        price: 428,
        description:
            'Save Rs 35 |Make room for our fully loaded Whopper with a juicy, flame-grilled Mutton Patty, tangy pickles, fresh veggies, mayo and ketchup served in fresh 5" buns. Comes with Fries (M, + Pepsi (M,',
        image: 'Mutton Whopper - Combo',
        category: 'Home Delight Combs',
        primaryKey: 13,
    },

    {
        name: 'Mutton Twisted Whopper Combo',
        isVeg: false,
        isBestseller: false,
        price: 468,
        description:
            'Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M, + Pepsi (M,',
        image: 'Mutton Twisted Whopper Combo',
        category: 'Home Delight Combs',
        primaryKey: 14,
    },

    {
        name: 'Crispy Chicken Combo',
        isVeg: false,
        isBestseller: false,
        price: 209,
        description:
            'Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M, + Pepsi (M,',
        image: 'Crispy Chicken Combo',
        category: 'Home Delight Combs',
        primaryKey: 15,
    },

    {
        name: 'Whopper Fridays- Veg Doubles',
        isVeg: true,
        isBestseller: false,
        price: 298,
        description: '2 Veg Whopper',
        image: 'Whopper Fridays- Veg Doubles',
        category: 'Friends and Family Combo',
        primaryKey: 16,
    },

    {
        name: 'Whopper Fridays - Veg meal',
        isVeg: true,
        isBestseller: false,
        price: 327,
        description: 'Veg Whopper + King Fries + Pepsi',
        image: 'Whopper Fridays - Veg meal',
        category: 'Friends and Family Combo',
        primaryKey: 17,
    },

    {
        name: 'Whopper Fridays- Mixed Doubles(Veg + Chicken)',
        isVeg: false,
        isBestseller: false,
        price: 328,
        description: '1 Veg Whopper + 1 Chicken Whopper',
        image: 'Whopper Fridays- Mixed Doubles(Veg + Chicken)',
        category: 'Friends and Family Combo',
        primaryKey: 18,
    },

    {
        name: 'Whopper Fridays - Veg Shake meal',
        isVeg: true,
        isBestseller: false,
        price: 387,
        description: 'Veg Whopper + King Fries + Shake',
        image: 'Whopper Fridays - Veg Shake meal',
        category: 'Whopper',
        primaryKey: 19,
    },

    {
        name: 'Whopper Fridays - Chicken Shake meal',
        isVeg: false,
        isBestseller: false,
        price: 417,
        description: 'Chicken Whopper + King Fries + Shake',
        image: ['Whopper Fridays - Chicken Shake meal'],
        category: 'Whopper',
        primaryKey: 20,
    },

    {
        name: 'Whopper Fridays- Feast for 2(Veg)',
        isVeg: true,
        isBestseller: false,
        price: 555,
        description: '2Veg Whopper + 1King Fries +2 Pepsi',
        image: 'Whopper Fridays- Feast for 2(Veg)',
        category: 'Whopper',
        primaryKey: 21,
    },

    {
        name: 'Chicken Tandoor Grill Burger',
        isVeg: false,
        isBestseller: false,
        price: 149,
        description:
            "Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onion with our unique corn dust buns. An indulgent treat from our King's Collection!",
        image: 'Chicken Tandoor Grill Burger',
        category: 'Meal Combos',
        primaryKey: 22,
    },

    {
        name: 'Cheese Melt Down Burger',
        isVeg: true,
        isBestseller: false,
        price: 169,
        description:
            "Cheese oozing spicy veg patty, veggies and creamy sauce. An indulgent treat from our King's Collection!",
        image: 'Cheese Melt Down Burger',
        category: 'Meal Combos',
        primaryKey: 23,
    },

    {
        name: 'Fiery Chicken Burger',
        isVeg: false,
        isBestseller: true,
        price: 179,
        description:
            "Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!",
        image: 'Fiery Chicken Burger',
        category: 'Meal Combos',
        primaryKey: 24,
    },

    {
        name: '2 Veg Whopper + 1Cheese Meltdown',
        isVeg: true,
        isBestseller: false,
        price: 467,
        description: '2 Veg Whopper + 1Cheese Meltdown',
        image: '2 Veg Whopper + 1Cheese Meltdown',
        category: 'Burgers and Wraps',
        primaryKey: 25,
    },

    {
        name: '2 Cheese Meltdown + 1Classic Veg',
        isVeg: true,
        isBestseller: false,
        price: 417,
        description: '2 Cheese Meltdown + 1Classic Veg',
        image: '2 Cheese Meltdown + 1Classic Veg',
        category: 'Burgers and Wraps',
        primaryKey: 26,
    },

    {
        name: '2 Chicken Whopper +1Fiery Chicken',
        isVeg: false,
        isBestseller: false,
        price: 537,
        description: '2 Chicken Whopper +1Fiery Chicken',
        image: '2 Chicken Whopper +1Fiery Chicken',
        category: 'Burgers and Wraps',
        primaryKey: 27,
    },

    {
        name: 'Mutton Whopper - Combo',
        isVeg: false,
        isBestseller: false,
        price: 428,
        description:
            'Save Rs 35 |Make room for our fully loaded Whopper with a juicy, flame-grilled Mutton Patty, tangy pickles, fresh veggies, mayo and ketchup served in fresh 5" buns. Comes with Fries (M, + Pepsi (M,',
        image: 'Mutton Whopper - Combo',
        category: "What's New",
        primaryKey: 28,
    },

    {
        name: 'Mutton Twisted Whopper Combo',
        isVeg: false,
        isBestseller: false,
        price: 468,
        description:
            'Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M, + Pepsi (M,',
        image: 'Mutton Twisted Whopper Combo',
        category: "What's New",
        primaryKey: 29,
    },

    {
        name: 'Crispy Chicken Combo',
        isVeg: false,
        isBestseller: false,
        price: 209,
        description:
            'Save Rs 35 |Our best-selling burger with crispy chicken patty, fresh onion and our signature sauce. Comes with Fries (M, + Pepsi (M,',
        image: 'Crispy Chicken Combo',
        category: "What's New",
        primaryKey: 30,
    },
];

export { itemData };
