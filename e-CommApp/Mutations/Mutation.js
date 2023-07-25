const { v4 : uuid } = require("uuid");
exports.Mutation={
    addCategory:(parent,args,{categories},info) => {
        const {input} = args;
        const {name} = input;
        const category = {
            id: uuid(),
            name,
            Product:[]
        }
        categories.push(category);
        return category;
    }
}