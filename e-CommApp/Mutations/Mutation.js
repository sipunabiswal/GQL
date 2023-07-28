const { v4 : uuid } = require("uuid");
exports.Mutation={
    addCategory:(parent,args,{db},info) => {
        const {input} = args;
        const {name} = input;
        const category = {
            id: uuid(),
            name,
            Product:[]
        }
        db.categories.push(category);
        return category;
    },
    
    addProduct:(parent,args,{db},info) => {
        const {input} = args;
        //const {CategoryId} = input;
        //const category = categories.find((category) => category.id === CategoryId);
        //if(!category) throw new Error("Category not found");
        const product = {
            id: uuid(),
            ...input
        }
        db.products.push(product);
        //category.Product.push(product);
        return product;        
    }
    ,
    deleteCategory:(parent,args,{db},info) => {
        const {id} = args;
        const categoryIndex = db.categories.findIndex((category) => category.id === id);
        if(categoryIndex === -1) throw new Error("Category not found");
        //const deletedCategory = db.categories.splice(categoryIndex,1);
        db.products = db.products.filter((product) => {
            const match = product.cattegoryId === id;
            if(match){
                db.reviews = db.reviews.filter((review) => review.productId !== product.id);
            }
            return !match;
        });
        db.reviews = db.reviews.filter((review) => review.productId !== id);
        return true;
    },
    updateCategory:(parent,args,{db},info) => {
        const {id,input} = args;

        const index= db.categories.findIndex((category) => category.id === id);

        if(index === -1) throw new Error("Category not found");

        const {name} = input;
        const updatedCategory = {
            ...db.categories[index],
            name
        }
        db.categories[index] = updatedCategory;
        return updatedCategory;
    },

}