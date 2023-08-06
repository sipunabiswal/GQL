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

    type ManualGroup{
        id: ID!
        name: String!
        description: String!
        imageId:ID!
        description: String!
        memberShip: [GroupMemberShip!]!
    }

    type AutomaticGroup{
        id: ID!
        name: String!
        description: String!
        imageId:ID!
        bodyHtml: String!
        feature: [AutomaticGroupFeature!]!
        applyFeature: Boolean!
        memberShip: [GroupMemberShip!]!
    }

    type AutomaticGroupFeature{
        column: String!
    }

    type GroupMemberShip{
        groupId: ID!
        carId: ID!
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            cars: () => [{id: 1, make: "Toyota", color: "Blue"},
            {id: 2, make: "Ford", color: "Red"},
            {id: 3, make: "BMW", color: "Black"},
            {id: 4, make: "Audi", color: "White"}],
        },
    },
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});