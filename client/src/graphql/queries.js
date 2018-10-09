import gql from 'graphql-tag'

export const getUser = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      description
      imageURL
    }
  }
`

export const getAllPosts = gql`{
  posts {
    id
    title
    content
    imageURL
  }
}`
