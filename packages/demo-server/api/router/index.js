const club = require('./club')
const competition = require('./competition')
const country = require('./country')
const game = require('./game')
const matchday = require('./matchday')
const player = require('./player')
const season = require('./season')

module.exports = function Api(app) {
  app.use('/api/club', club)
  app.use('/api/competition', competition)
  app.use('/api/country', country)
  app.use('/api/game', game)
  app.use('/api/matchday', matchday)
  app.use('/api/player', player)
  app.use('/api/season', season)
}
