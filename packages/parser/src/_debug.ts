import * as country from './country'

async function debug() {
  const countries = await country.list()
  console.log('countries', countries)
}

debug()
