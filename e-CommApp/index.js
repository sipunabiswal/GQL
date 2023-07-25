const { ApolloServer} = require("apollo-server");
const {typeDefs} = require("./Schema");
const {Query} = require("./Resolver/Query");
const {Product} = require("./Resolver/Product");
const {Category} = require("./Resolver/Category");
const {Mutation} = require("./Mutations/Mutation");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Product,
        Category,        
    },
    context: {
        categories: [],
        products: [],
    }
});

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
});