import { country } from './index'

async function test() {
  const countries = await country.list()
  console.log('countries', countries)
}

test()
