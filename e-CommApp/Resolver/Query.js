const {products,categories} = require("../Module/Data/StaticData");

exports.Query={
    hello:() => {
        return "Hello World!!!!!";
    },
    product:( parent, {filter}, context) => {
        if(!filter){
            return products;
        }
        if(filter.onSale !== undefined){
            return products.filter((product) => product.onSale === filter.onSale);
        }
        return products;
    },
    productDetails:(parent,args,context,info) => {
        const {id} = args;
        const product = products.find((product) => product.id === id); 
        return product;
    },
    categories:() => {
        return categories;
    },
    Category:(parent,args,context,info) => {
        const {id} = args;
        const category = categories.find((category) => category.id === id);
        return category;
    },
}
