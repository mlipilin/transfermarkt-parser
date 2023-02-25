import { JSDOM } from 'jsdom'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Season } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(competitionId: string): Promise<Array<Season>> {
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

    return Array.from(
      dom.window.document.querySelectorAll('select[name=saison_id] option')
    )
      .filter((node) => node.getAttribute('value'))
      .map((node) => ({
        competitionId,
        id: node.getAttribute('value'),
        title: node.innerHTML,
      }))
  }, [])

  return makeRequest(url.season.list(competitionId)).then(parseFn)
}
