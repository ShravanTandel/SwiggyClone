class Item {
    constructor(name, isVeg, price, description, image, category) {
        this.name = name;
        this.isVeg = isVeg;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
    }
}

let ItemBuilder = function () {
    return {
        constructor() {
            this.name = "";
            this.isVeg = true;
            this.price = 0;
            this.description = "";
            this.image = "";
            this.category = "";
        },
        setName: function (name) {
            this.name = name;
            return this;
        },
        setIsVeg: function (isVeg) {
            this.isVeg = isVeg;
            return this;
        },
        setPrice: function (price) {
            this.price = price;
            return this;
        },
        setDescription: function (description) {
            this.description = description;
            return this;
        },
        setImage: function (image) {
            this.image = image;
            return this;
        },
        setCategory: function (category) {
            this.category = category;
            return this;
        },
        build: function () {
            return new Item(name, isVeg, price, description, image, category);
        }
    };
};

// let item = new ItemBuilder().setName("Wrapper").setDescription('2 Wrapper + 1 pepsi');
// console.log(item);