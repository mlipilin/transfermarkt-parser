import { competition } from '../index'

const timeout = Number(process.env.JEST_ASYNC_TIMEOUT)

describe('list', () => {
  test(
    'competition.list(189) -> list of competitions for England',
    async () => {
      await expect(competition.list(189)).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'competition.list(-999) -> []',
    async () => {
      await expect(competition.list(-999)).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'competition.list() -> []',
    async () => {
      // @ts-ignore
      await expect(competition.list()).resolves.toMatchSnapshot()
    },
    timeout
  )
})
