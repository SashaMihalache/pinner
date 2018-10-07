import helloRoutes from './api/hello/HelloRoutes'

export function registerRoutes (app) {
  app.use('/api', helloRoutes)

  app.use('/', (req, res) => {
    res.send('Route not found')
  })
}
