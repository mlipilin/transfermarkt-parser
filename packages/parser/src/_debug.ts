// import * as club from './club'
// import * as competition from './competition'
// import * as country from './country'
import * as matchday from './matchday'
// import * as season from './season'

async function debug() {
  // const countries = await country.list()
  // console.log('countries', countries)

  // const competitions = await competition.list(189)
  // console.log('competitions', competitions)

  // const seasons = await season.list('GB1')
  // console.log('seasons', seasons)

  // const clubs = await club.list('GB1', '2022')
  // console.log('clubs', clubs)

  const matchdays = await matchday.list('GB1', '2022')
  console.log('matchdays', matchdays)
}

debug()
