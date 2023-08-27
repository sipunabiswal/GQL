import {gql } from "apollo-server";
export const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    postsCreate(posts:PostInput!): PostPayload!
    postsUpdate(posts:PostInput!): PostPayload!
  }
  type Posts{
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    published: Boolean!

    user: Users!
  }
  type Users{
    id: ID!
    name: String!
    email: String!
    createdAt: String!

    profile: Profile!
    posts: [Posts!]!
  }
  type Profile{
    id: ID!
    bio: String!
    user: Users!
  }

  type UserError{
    field: String!
    message: String!
  }

  type PostPayload{
    UserError: [UserError]
    posts: Posts
  }

  input PostInput{
    title: String!
    content: String!
  }
`;