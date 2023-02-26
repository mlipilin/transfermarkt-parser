import { JSDOM } from 'jsdom'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Matchday } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(
  competitionId: string,
  seasonId: string
): Promise<Array<Matchday>> {
  const parseFn = parse((data) => {
    if (!data) {
      throw ERROR_NOT_FOUND
    }

    const dom = new JSDOM(data)

    const nodes = Array.from(
      dom.window.document.querySelectorAll('.large-6.columns:not([id])')
    )

    const matchdays = nodes
      .filter((node) => !!node.querySelector('.content-box-headline'))
      .map((node, index) => ({
        competitionId,
        id: index + 1,
        seasonId,
        title: node.querySelector('.content-box-headline').innerHTML,
      }))

    // Detect INcorrect year
    if (matchdays.length === 2 && matchdays[0].title === '0.Matchday') {
      return []
    }

    return matchdays
  }, [])

  return makeRequest(url.matchday.list(competitionId, seasonId)).then(parseFn)
}
