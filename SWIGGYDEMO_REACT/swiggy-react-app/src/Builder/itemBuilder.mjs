function Item(name, isVeg, isBestseller, price, description, image, category, pk) {
        this.name = name;
        this.isVeg = isVeg;
        this.isBestseller = isBestseller;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
        this.pk = pk
}

var ItemBuilder = function () {
    let name = "";
    let isVeg = false;
    let isBestseller = false;
    let price = 0;
    let description = "";
    let image = "";
    let category = "";
    let pk = 0;

    return {
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
        setPk: function (pk) {
            this.pk = pk;
            return this;
        },
        build: function () {
            return new Item(this.name, this.isVeg, this.isBestseller, this.price, this.description, this.image, this.category, this.pk);
        }
    };
}

export { ItemBuilder };

// let item = new ItemBuilder().setName("Wrapper").setIsVeg(true).setIsBestseller(true).setPrice(200).setDescription('2 Wrapper + 1 pepsi').setImage("Image").setCategory("Recommanded");
// console.log(item);