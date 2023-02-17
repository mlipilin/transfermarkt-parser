import * as competition from './competition'
import * as country from './country'

async function debug() {
  const countries = await country.list()
  console.log('countries', countries)

  const competitions = await competition.list(189)
  console.log('competitions', competitions)
}

debug()
