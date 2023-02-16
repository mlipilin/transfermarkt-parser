// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { country, Country } from 'transfermarkt-parser'

type Data = Country[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const countries = await country.list()
  res.status(200).json(countries)
}
