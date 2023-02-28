const express = require('express')

const { season } = require('transfermarkt-parser')

const router = express.Router()

router.get('/list', async (req, res) => {
  if (!req.query?.competitionId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasons = await season.list(competitionId)
  res.status(200).json(seasons)
})

module.exports = router
