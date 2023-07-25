const {categories,reviews} = require('../Module/Data/StaticData');
exports.Product={
    Category:(parent,args,context,info) => {
        const {cattegoryId} = parent;
        const productCategory = categories.find((category) => category.id === cattegoryId);
        return productCategory;
    },
    Review:(parent,args,context,info) => {
        const {id} = parent;
        const productReviews = reviews.filter((review) => review.productId === id);
        return productReviews;
    }
}
