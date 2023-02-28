import express, { Response } from 'express'

import { player, Player } from 'transfermarkt-parser'

type Data = Player[] | { error: string }

const router = express.Router()

router.get('/list', async (req, res: Response<Data>) => {
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

export default router
