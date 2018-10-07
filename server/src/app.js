import express from 'express'
import { registerRoutes } from './router'
import { setEnvironment } from './config/env'
import { connectToDB } from './config/db'

const app = express()
const PORT = process.env.PORT || 3000;

setEnvironment(app)
connectToDB()
registerRoutes(app)

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode.')
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist' })
  }
})

app.listen(PORT, () => console.log(`Pinner app listening on port ${PORT}! in ${process.env.NODE_ENV} mode`))
