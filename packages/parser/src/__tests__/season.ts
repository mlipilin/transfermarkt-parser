import { season } from '../index'

const timeout = Number(process.env.JEST_ASYNC_TIMEOUT)

describe('list', () => {
  test(
    'season.list("GB1") -> list of seasons for EPL',
    async () => {
      await expect(season.list('GB1')).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'season.list("wrongCompetitionId") -> []',
    async () => {
      await expect(season.list('wrongCompetitionId')).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'season.list() -> []',
    async () => {
      // @ts-ignore
      await expect(season.list()).resolves.toMatchSnapshot()
    },
    timeout
  )
})
