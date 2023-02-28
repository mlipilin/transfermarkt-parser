import express, { Response } from 'express'

import { season, Season } from 'transfermarkt-parser'

type Data = Season[] | { error: string }

const router = express.Router()

router.get('/list', async (req, res: Response<Data>) => {
  if (!req.query?.competitionId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasons = await season.list(competitionId)
  res.status(200).json(seasons)
})

export default router
