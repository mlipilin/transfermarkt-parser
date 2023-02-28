const app = require('express')()
const applyRouter = require('./router')

applyRouter(app)

module.exports = app
