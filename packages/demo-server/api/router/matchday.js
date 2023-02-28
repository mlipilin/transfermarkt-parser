const express = require('express')

const { matchday } = require('transfermarkt-parser')

const router = express.Router()

router.get('/list', async (req, res) => {
  if (!req.query?.competitionId) {
    return res.status(422).json({
      error: 'competitionId is required',
    })
  }
  if (!req.query?.seasonId) {
    return res.status(422).json({
      error: 'seasonId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasonId = String(req.query?.seasonId)
  const matchdays = await matchday.list(competitionId, seasonId)
  res.status(200).json(matchdays)
})

module.exports = router
