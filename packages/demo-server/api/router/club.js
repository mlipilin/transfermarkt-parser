const express = require('express')

const { club } = require('transfermarkt-parser')

const router = express.Router()

router.get('/list', async (req, res) => {
  if (!req.query?.competitionId) {
    return res.status(422).json({
      error: 'competitionId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasonId = String(req.query?.seasonId)
  const clubs = await club.list(competitionId, seasonId)
  res.status(200).json(clubs)
})

module.exports = router
