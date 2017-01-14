let Router = require('express').Router
let checkAuth = require('../config/middleware.js').checkAuth

const indexRouter = Router()

indexRouter.get('/', function(req, res) {
  res.render('index')
})

// get and render the register page
indexRouter.get('/register', function(req, res) {
  res.render('register')
})

indexRouter.get('/login', function(req, res) {
  res.render('login')
})

indexRouter.get('/dashboard', checkAuth, function(req, res) {
  res.render('dashboard')
})

indexRouter.get('/forbidden', function(req, res) {
  res.render('forbidden')
})

module.exports = indexRouter
