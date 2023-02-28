import express, { Response } from 'express'

import { country, Country } from 'transfermarkt-parser'

type Data = Country[]

const router = express.Router()

router.get('/list', async (req, res: Response<Data>) => {
  const countries = await country.list()
  res.status(200).json(countries)
})

export default router
