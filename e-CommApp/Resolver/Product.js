const {db} = require('../Module/Data/StaticData');
exports.Product={
    Category:(parent,args,{db},info) => {
        const {cattegoryId} = parent;
        const productCategory = db.categories.find((category) => category.id === cattegoryId);
        return productCategory;
    },
    Review:(parent,args,{db},info) => {
        const {id} = parent;
        const productReviews = db.reviews.filter((review) => review.productId === id);
        return productReviews;
    }
}
