const express = require('express')

const { competition } = require('@mlipilin/transfermarkt-parser')

const router = express.Router()

router.get('/list', async (req, res) => {
  if (!req.query?.countryId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const countryId = Number(req.query?.countryId)
  const competitions = await competition.list(countryId)
  res.status(200).json(competitions)
})

module.exports = router
