function Item(
    name,
    isVeg,
    isBestseller,
    price,
    description,
    image,
    category,
    primaryKey
) {
    this.name = name;
    this.isVeg = isVeg;
    this.isBestseller = isBestseller;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.primaryKey = primaryKey;
}

var ItemBuilder = function () {
    return {
        constructor() {
            this.name = '';
            this.isVeg = false;
            this.isBestseller = false;
            this.price = 0;
            this.description = '';
            this.image = '';
            this.category = '';
            this.primaryKey = 0;
        },
        setName: function (name) {
            this.name = name;
            return this;
        },
        setIsVeg: function (isVeg) {
            this.isVeg = isVeg;
            return this;
        },
        setIsBestseller: function (isBestseller) {
            this.isBestseller = isBestseller;
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
        setPrimaryKey: function (primaryKey) {
            this.primaryKey = primaryKey;
            return this;
        },
        build: function () {
            return new Item(
                this.name,
                this.isVeg,
                this.isBestseller,
                this.price,
                this.description,
                this.image,
                this.category,
                this.primaryKey
            );
        },
    };
};

export { ItemBuilder };
