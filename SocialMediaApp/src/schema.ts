import {gql } from "apollo-server";
export const typeDefs = gql`
  type Query {
    posts: [Posts!]!
  }
  type Mutation {
    postsCreate(posts:PostInput!): PostPayload!
    postsUpdate(postId:ID!, posts:PostInput!): PostPayload!
    signup(email:String!, name:String!,password: String!, bio:String!)
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