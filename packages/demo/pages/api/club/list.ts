// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { club, Club } from 'transfermarkt-parser'

type Data = Club[] | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query?.competitionId || !req.query?.seasonId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const competitionId = String(req.query?.competitionId)
  const seasonId = String(req.query?.seasonId)
  const clubs = await club.list(competitionId, seasonId)
  res.status(200).json(clubs)
}
