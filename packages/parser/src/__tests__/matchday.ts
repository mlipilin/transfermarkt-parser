import { matchday } from '../index'

const timeout = Number(process.env.JEST_ASYNC_TIMEOUT)

describe('list', () => {
  test(
    'matchday.list("GB1", "2022") -> list of matchdays for EPL (season 22/23)',
    async () => {
      await expect(matchday.list('GB1', '2022')).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'matchday.list("wrongCompetitionId", "wrongSeasonId") -> []',
    async () => {
      await expect(
        matchday.list('wrongCompetitionId', 'wrongSeasonId')
      ).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'matchday.list() -> []',
    async () => {
      // @ts-ignore
      await expect(matchday.list()).resolves.toMatchSnapshot()
    },
    timeout
  )
})
