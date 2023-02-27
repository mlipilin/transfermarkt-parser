import { JSDOM } from 'jsdom'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Game } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(
  competitionId: string,
  seasonId: string,
  matchday: number
): Promise<Array<Game>> {
  const defaultResponse = []

  const parseFn = parse((data) => {
    if (!data) {
      throw ERROR_NOT_FOUND
    }

    const dom = new JSDOM(data)

    const nodes = Array.from(
      dom.window.document.querySelectorAll(
        '.large-8.columns > .box:not(:first-child):not(:last-child)'
      )
    )

    return nodes.map((node) => {
      // Id
      const gameLinkNode: HTMLAnchorElement =
        node.querySelector('.ergebnis-box > a')
      let id = null
      if (gameLinkNode && gameLinkNode.href) {
        const hrefParts = gameLinkNode.href.split('/')
        id = hrefParts.length > 1 ? hrefParts[hrefParts.length - 1] : null
      }

      // Goals
      const goalsNode = gameLinkNode?.querySelector('span')
      let club1Goals = null
      let club2Goals = null
      if (goalsNode) {
        const [club1G = null, club2G = null] = goalsNode.innerHTML
          ? goalsNode.innerHTML.trim().split(':')
          : []
        club1Goals = club1G && club1G !== '-' ? Number(club1G) : null
        club2Goals = club2G && club2G !== '-' ? Number(club2G) : null
      }

      // Club1
      const club1Node = node.querySelector(
        'tr.table-grosse-schrift > td:nth-child(1) > a:first-of-type'
      )
      const club1Id = club1Node
        ? Number(
            club1Node
              .getAttribute('href')
              .replace(/.*verein\//, '')
              .replace(/\/saison_id.*/, '')
          )
        : null

      // Club2
      const club2Node = node.querySelector(
        'tr.table-grosse-schrift > td:nth-child(8) > a:first-of-type'
      )
      const club2Id = club2Node
        ? Number(
            club2Node
              .getAttribute('href')
              .replace(/.*verein\//, '')
              .replace(/\/saison_id.*/, '')
          )
        : null

      return {
        club1Goals,
        club2Goals,
        club1Id,
        club2Id,
        competitionId,
        id,
        matchday,
        seasonId,
      }
    })
  }, defaultResponse)

  return makeRequest(url.game.list(competitionId, seasonId, matchday))
    .then(parseFn)
    .catch(() => defaultResponse)
}
