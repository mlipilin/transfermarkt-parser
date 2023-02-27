import { game } from '../index'

const timeout = Number(process.env.JEST_ASYNC_TIMEOUT)

describe('list', () => {
  test(
    'game.list("GB1", "2022") -> list of games for EPL (season 22/23, matchday 1)',
    async () => {
      await expect(game.list('GB1', '2022', 1)).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'game.list("wrongCompetitionId", "wrongSeasonId", -999) -> []',
    async () => {
      await expect(
        game.list('wrongCompetitionId', 'wrongSeasonId', -999)
      ).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'game.list() -> []',
    async () => {
      // @ts-ignore
      await expect(game.list()).resolves.toMatchSnapshot()
    },
    timeout
  )
})
