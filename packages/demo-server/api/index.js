const app = require('express')()
const cors = require('cors')
const applyRouter = require('./router')

app.use(cors())

applyRouter(app)

module.exports = app
