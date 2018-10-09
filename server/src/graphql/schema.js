import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Post {
    id: ID!
    title: String
    content: String
    imageURL: String
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    description: String
    imageURL: String
  }

  type Query {
    posts: [Post]
    user(id: ID!): User
  }

  type Mutation {
    addPost(title: String!, content: String! imgURL: String!): Post
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };