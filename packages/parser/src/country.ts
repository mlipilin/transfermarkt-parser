import { JSDOM } from 'jsdom'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Country } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(): Promise<Array<Country>> {
  const parseFn = parse((data) => {
    if (!data) {
      throw ERROR_NOT_FOUND
    }

    const dom = new JSDOM(data)

    const nodes = Array.from(dom.window.document.querySelectorAll('option'))

    return nodes
      .filter((node) => !!node.getAttribute('value'))

      .map((node) => {
        const id = parseInt(
          (node.getAttribute('value') as string).replace(/\D/g, '')
        )

        const entity: Country = {
          flagUrl: url.country.flag(id),
          id,
          title: node.innerHTML?.replace('&lt;\\/option&gt;', ''),
        }

        return entity
      })
  }, [])

  return makeRequest(url.country.list()).then(parseFn)
}
