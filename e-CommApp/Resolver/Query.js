const {db} = require("../Module/Data/StaticData");

exports.Query={
    hello:() => {
        return "Hello World!!!!!";
    },
    product:( parent, {filter}, context) => {
        //const proList = db.products;
        if(!filter){
            return db.products;
        }
        if(filter.onSale !== undefined){
            return db.products.filter((product) => product.onSale === filter.onSale);
        }        
    },
    productDetails:(parent,args,context,info) => {
        const {id} = args;
        const product = db.products.find((product) => product.id === id); 
        return product;
    },
    categories:() => {
        return db.categories;
    },
    Category:(parent,args,context,info) => {
        const {id} = args;
        const category = db.categories.find((category) => category.id === id);
        return category;
    },
}
