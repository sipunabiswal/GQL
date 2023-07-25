const {products}= require('../Module/Data/StaticData');
exports.Category={
    Product:(parent,args,context,info) => {
        const {id} = parent;
        const categoryProducts = products.filter((product) => product.cattegoryId === id);
        let {filter} = args;
        let ffilteredProducts = categoryProducts;
        if(filter){
            if(filter.onSale !== undefined){
                ffilteredProducts = categoryProducts.filter((product) => product.onSale === filter.onSale);
            }
        }

        return ffilteredProducts;
    },
}
