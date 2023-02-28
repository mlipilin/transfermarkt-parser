const app = require('./index')

app.listen(process.env.PORT, () => {
  console.log(`demo-server is listening on port ${process.env.PORT}`)
})
