// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { competition, Competition } from 'transfermarkt-parser'

type Data = Competition[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const competitions = await competition.list(req.query.countryId)
  res.status(200).json(competitions)
}
