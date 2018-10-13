import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

export async function setEnvironment (app) {
  if (process.env.NODE_ENV === 'production') {
    setProdEnv(app)
  } else {
    setDevEnv(app)
  }
}

function setDevEnv (app) {
  //dev variables
  process.env.NODE_ENV = 'development'
  process.env.DB_URL = 'mongodb://localhost'
  process.env.DB_NAME = 'pinner-db'
  process.env.TOKEN_SECRET = 'pinner_development_secret'
  process.env.PORT = 3000;

  //middlewares
  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use('*', cors({ origin: 'http://localhost:8080' }))
}

function setProdEnv (app) {
  process.env.DB_URL = 'mongodb://localhost:27017/pinner-db'
  process.env.TOKEN_SECRET = 'my_production_secret'
  app.use(bodyParser.json())
  app.use(express.static(__dirname + '/../dist'))
}
