const express = require('express')

const { player } = require('@mlipilin/transfermarkt-parser')

const router = express.Router()

router.get('/list', async (req, res) => {
  if (!req.query?.clubId) {
    return res.status(422).json({
      error: 'clubId is required',
    })
  }
  if (!req.query?.seasonId) {
    return res.status(422).json({
      error: 'seasonId is required',
    })
  }

  const clubId = Number(req.query?.clubId)
  const seasonId = String(req.query?.seasonId)
  const players = await player.list(clubId, seasonId)
  res.status(200).json(players)
})

module.exports = router
