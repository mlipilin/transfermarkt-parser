import { player } from '../index'

const timeout = Number(process.env.JEST_ASYNC_TIMEOUT)

describe('list', () => {
  test(
    'player.list("GB1", "2022") -> list of players for Man. City (season 22/23)',
    async () => {
      await expect(player.list(281, '2022')).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'player.list("-999", "wrongSeasonId") -> []',
    async () => {
      await expect(
        player.list(-999, 'wrongSeasonId')
      ).resolves.toMatchSnapshot()
    },
    timeout
  )
  test(
    'player.list() -> []',
    async () => {
      // @ts-ignore
      await expect(player.list()).resolves.toMatchSnapshot()
    },
    timeout
  )
})
