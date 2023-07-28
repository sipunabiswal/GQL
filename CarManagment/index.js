const {ApolloServer, gql} = require("apollo-server");
const typeDefs =gql`
    type Query{
        cars: [Car!]!
    }

    type Car{
        id: ID!
        make: String!
        color: String!
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            cars: () => [{id: 1, make: "Toyota", color: "Blue"}],
        },
    },
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});