const { ApolloServer} = require("apollo-server");
const {typeDefs} = require("./Schema");
const {Query} = require("./Resolver/Query");
const {Product} = require("./Resolver/Product");
const {Category} = require("./Resolver/Category");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category,
    },
});

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
});