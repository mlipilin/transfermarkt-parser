import express, { Response } from 'express'

import { competition, Competition } from 'transfermarkt-parser'

type Data = Competition[] | { error: string }

const router = express.Router()

router.get('/list', async (req, res: Response<Data>) => {
  if (!req.query?.countryId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const countryId = Number(req.query?.countryId)
  const competitions = await competition.list(countryId)
  res.status(200).json(competitions)
})

export default router
