// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { competition, Competition } from 'transfermarkt-parser'

type Data = Competition[] | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query?.countryId) {
    return res.status(422).json({
      error: 'countryId is required',
    })
  }

  const countryId = Number(req.query?.countryId)
  const competitions = await competition.list(countryId)
  res.status(200).json(competitions)
}
