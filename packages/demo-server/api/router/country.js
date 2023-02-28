const express = require('express')

const { country } = require('transfermarkt-parser')

const router = express.Router()

router.get('/list', async (req, res) => {
  const countries = await country.list()
  res.status(200).json(countries)
})

module.exports = router
