// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { season, Season } from 'transfermarkt-parser'

type Data = Season[] | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query?.competitionId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasons = await season.list(competitionId)
  res.status(200).json(seasons)
}
