import express, { Response } from 'express'

import { game, Game } from 'transfermarkt-parser'

type Data = Game[] | { error: string }

const router = express.Router()

router.get('/list', async (req, res: Response<Data>) => {
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
  if (!req.query?.matchdayId) {
    return res.status(422).json({
      error: 'matchdayId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasonId = String(req.query?.seasonId)
  const matchdayId = Number(req.query?.matchdayId)
  const games = await game.list(competitionId, seasonId, matchdayId)
  res.status(200).json(games)
})

export default router
