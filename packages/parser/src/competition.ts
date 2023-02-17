import { JSDOM } from 'jsdom'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Competition } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(countryId: number): Promise<Array<Competition>> {
  const parseFn = parse((data) => {
    if (!data) {
      throw ERROR_NOT_FOUND
    }

    const dom = new JSDOM(data)

    const nodes = Array.from(dom.window.document.querySelectorAll('option'))

    return nodes
      .filter((node) => !!node.getAttribute('value'))
      .map((node) => {
        const id = node.getAttribute('value')

        const entity: Competition = {
          countryId,
          id,
          logoUrl: url.competition.logo(id),
          title: node.innerHTML,
        }

        return entity
      })
  }, [])
  return makeRequest(url.competition.list(), {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `land_id=${countryId}`,
  }).then(parseFn)
}
