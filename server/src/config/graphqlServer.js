import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser'

import { connectToDB } from './db'
import { schema } from '../graphql/schema';
import { dataloaders } from "../graphql/resolvers";

export async function setGraphQL (app) {

  const mongo = await connectToDB()

  // GraphQL
  app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {
      dataloaders: dataloaders(mongo),
      mongo
    }
  }))

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))
}