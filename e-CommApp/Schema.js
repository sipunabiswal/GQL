const { gql} = require("apollo-server");

exports.typeDefs = gql`
    type Query{
        hello:String
        product(filter: ProductFilter):[Product!]!
        productDetails(id:ID!):Product!
        categories:[Category!]!
        Category(id:ID!):Category!
    }
    type Mutation{
        addCategory (input:CategoryInput): Category!
        addProduct (input:AddProductInput): Product!
        deleteCategory(id:ID!): Boolean!

        updateCategory(id:ID!,input:UpdateCategoryInput): Category!
    }
    type Product{
        id:ID!
        name:String!
        description:String!
        quantity:Int!
        price:Float!
        image:String!
        onSale:Boolean!
        Category:Category!
        Review:[Review!]!
    }
    type Category{
        id:ID!
        name:String!
        Product(filter: ProductFilter):[Product!]!
    }

    type Review{
        id:ID!
        title:String!
        date:String!
        rating:Int!
        comment:String!
    }
    input ProductFilter{
        onSale:Boolean
    }
    input CategoryInput{
        name:String!
    }
    input UpdateCategoryInput{
        name:String!
    }
    input AddProductInput{
        name:String!
        description:String!
        quantity:Int!
        price:Float!
        image:String!
        onSale:Boolean!
        CategoryId:ID!
    }
`;
