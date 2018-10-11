import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    fullName: String
    email: String!
    description: String
    imageURL: String
  }

  type Post {
    id: ID!
    title: String
    content: String
    imageURL: String
    Author: User
    Stats: Stat
    Comments: [Comment]
  }

  type Stat {
    id: ID!
    views: Int
    likes: Int
    shares: Int
    comments: Int
  }

  type Comment {
    id: ID!
    text: String
    Author: User,
    Post: Post
  }

  type Notification {
    id: ID
    date: Date
    type: String
  }

  type Query {
    posts(limit: Int, sortField: String, sortOrder: String): [Post]
    post(id: ID): Post
    users: [User]
    user(id: ID!): User
    comments: [Comment]
    comment(id: ID!): Comment
    Notifications(limit: Int): [Notification]
  }

  type Mutation {
    createPost(title: String!, content: String! imageURL: String): Post
    updatePost(id: ID!, title: String, content: String, imageURL: String): Post
    deletePost(id: ID!): Post
    markPostSeen(id: ID!): Boolean

    createComment(text: String!, authorId: String!, postId: String!): Comment
    updateComment(id: ID!, text: String!): Comment
    deleteComment(id: ID!): Comment

    createUser(firstName: String, lastName: String, email: String!, password: String!): User
    updateUser(id: ID!, firstName: String, lastName: String): User
    deleteUser(id: ID!): User
  }

  type Subscription {
    postPublished(userId: ID!): Post
  }

  scalar Date
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: e => console.log(e) }
});
export { schema };