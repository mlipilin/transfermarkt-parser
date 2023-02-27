import { country } from '../index'

describe('list', () => {
  test(
    'country.list() -> full list of countries',
    async () => {
      await expect(country.list()).resolves.toMatchSnapshot()
    },
    Number(process.env.JEST_ASYNC_TIMEOUT)
  )
})
