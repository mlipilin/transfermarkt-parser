import express, { Response } from 'express'

import { matchday, Matchday } from 'transfermarkt-parser'

type Data = Matchday[] | { error: string }

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

  const competitionId = String(req.query?.competitionId)
  const seasonId = String(req.query?.seasonId)
  const matchdays = await matchday.list(competitionId, seasonId)
  res.status(200).json(matchdays)
})

export default router
