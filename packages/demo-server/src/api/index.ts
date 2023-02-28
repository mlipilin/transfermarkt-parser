import { Express } from 'express'

import club from './club'
import competition from './competition'
import country from './country'
import game from './game'
import matchday from './matchday'
import player from './player'
import season from './season'

export default function Api(app: Express) {
  app.use('/api/club', club)
  app.use('/api/competition', competition)
  app.use('/api/country', country)
  app.use('/api/game', game)
  app.use('/api/matchday', matchday)
  app.use('/api/player', player)
  app.use('/api/season', season)
}
