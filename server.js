const express = require('express')
const portNumber = require('port-number')
const history = require('connect-history-api-fallback')
const webpack = require('webpack')
const devConfig = require('./webpack/dev.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const connectToDB = require('./db/config').connectToDB
const apiRouter = require('./routes/apiRouter')

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT ? process.env.PORT : portNumber()

const app = express()

app.use(history())

connectToDB()

if (isDev) {
  const compiler = webpack(devConfig)
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    stats: 'errors-only'
  }))
  app.use(webpackHotMiddleware(compiler))
}
else {
  app.use(express.static(__dirname + '/dist'))
}

app.use('/api', apiRouter)

app.listen(port, function() {
  console.log('App running on http://localhost:' + port)
})
