import express from 'express'

import applyApi from './api'

const app = express()

applyApi(app)

app.listen(process.env.PORT, () => {
  console.log(`demo-server is listening on port ${process.env.PORT}`)
})
