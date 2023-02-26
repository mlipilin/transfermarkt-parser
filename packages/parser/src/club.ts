import { JSDOM } from 'jsdom'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Club } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(
  competitionId: string,
  seasonId: string
): Promise<Array<Club>> {
  const parseFn = parse((data) => {
    if (!data) {
      throw ERROR_NOT_FOUND
    }

    const dom = new JSDOM(data)

    // Correct page marker
    const markerNode = dom.window.document.querySelector(
      '#wettbewerbsstartseite .info-content'
    )
    const hasMarker = /competition startpage/i.test(markerNode?.innerHTML)

    if (!hasMarker) {
      throw ERROR_NOT_FOUND
    }

    const nodes = Array.from(
      dom.window.document.querySelectorAll('#yw1 tbody tr')
    )

    return nodes
      .filter((node) => node.querySelector('.hauptlink a'))
      .map((node) => {
        const linkNode = node.querySelector('.hauptlink a')
        const id = parseInt(
          linkNode
            .getAttribute('href')
            .replace(/.*verein\//, '')
            .replace(/\/saison_id.*/, '')
        )

        return {
          id,
          logoUrl: url.club.logo(id),
          title: linkNode.innerHTML,
        }
      })
  }, [])

  const requestUrl = url.club.list(competitionId, seasonId)
  console.log('requestUrl', requestUrl)
  return makeRequest(url.club.list(competitionId, seasonId)).then(parseFn)
}
