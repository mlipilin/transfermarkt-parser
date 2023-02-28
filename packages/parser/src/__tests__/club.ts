import { club } from '../index'

const timeout = Number(process.env.JEST_ASYNC_TIMEOUT)

describe('list', () => {
  test(
    'club.list("GB1", "2022") -> list of clubs for EPL (season 22/23)',
    async () => {
      await expect(club.list('GB1', '2022')).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'club.list("wrongCompetitionId", "wrongSeasonId") -> []',
    async () => {
      await expect(
        club.list('wrongCompetitionId', 'wrongSeasonId')
      ).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'club.list() -> []',
    async () => {
      // @ts-ignore
      await expect(club.list()).resolves.toMatchSnapshot()
    },
    timeout
  )
})
