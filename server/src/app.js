import express from 'express'
// import {
//   graphqlExpress,
//   graphiqlExpress
// } from 'graphql-server-express';
import { setEnvironment } from './config/env'
import { setGraphQL } from './config/graphqlServer';
import { registerRoutes } from './router'
// import { connectToDB } from './config/db'
// import { schema } from './graphql/schema';
// import { dataloaders } from "./graphql/resolvers";

const init = async () => {

  const app = express()
  const PORT = process.env.PORT || 3000;

  await setEnvironment(app)
  await setGraphQL(app);
  registerRoutes(app)

  app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
      return res.send('Running server in development mode.')
    } else {
      return res.sendFile('index.html', { root: __dirname + '/../dist' })
    }
  })

  app.listen(PORT, () => console.log(`Pinner app listening on port ${PORT}! in ${process.env.NODE_ENV} mode`))

}

init();