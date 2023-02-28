import { JSDOM } from 'jsdom'
import * as moment from 'moment'

// Constants
import { ERROR_NOT_FOUND } from './constants/errors'

// Types
import { Player } from './types'

// Utils
import makeRequest from './utils/make-request'
import parse from './utils/parse'
import url from './utils/url'

export function list(clubId: number, seasonId: string): Promise<Array<Player>> {
  const defaultResponse = []

  const parseFn = parse((data) => {
    if (!data) {
      throw ERROR_NOT_FOUND
    }

    const dom = new JSDOM(data)

    // Correct page marker
    const markerNode = dom.window.document.querySelector(
      'p.data-header__last-update'
    )
    const marker = markerNode?.innerHTML?.trim() === 'Total market value'
    if (!marker) {
      throw ERROR_NOT_FOUND
    }

    const nodes = Array.from(
      dom.window.document.querySelectorAll('#yw1 > table.items > tbody > tr')
    )

    // birthday: 'Invalid date'
    // nationalities: []

    return nodes
      .filter((node) => node.querySelector('.hauptlink a'))
      .map((node) => {
        const linkNode = node.querySelector('.hauptlink a')
        const id = parseInt(
          linkNode.getAttribute('href').replace(/.*\/spieler\//, '')
        )
        const name = linkNode.innerHTML

        const numberNode = node.querySelector('.tm-shirt-number')
        const number =
          !numberNode?.innerHTML || numberNode?.innerHTML === '-'
            ? undefined
            : parseInt(numberNode?.innerHTML)

        const photoNode: HTMLImageElement = node.querySelector(
          'table.inline-table img'
        )
        const photoUrl = photoNode
          ?.getAttribute('data-src')
          ?.replace('small', 'big')

        const positionNode = node.querySelector(
          'table.inline-table tr:last-child td'
        )
        const position = positionNode.innerHTML || null

        const birthdayNode = node.querySelector('td:nth-child(4)')
        const birthday = birthdayNode
          ? moment(birthdayNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
          : null

        const nationalitiesNodes: HTMLImageElement[] = Array.from(
          node.querySelectorAll('td:nth-child(5) > img')
        )
        const nationalities = []
        if (nationalitiesNodes) {
          nationalitiesNodes.forEach((nationalityNode) => {
            nationalities.push(nationalityNode ? nationalityNode.title : null)
          })
        }

        return {
          id,
          name,
          birthday,
          nationalities,
          number,
          photoUrl,
          position,
        }
      })
  }, defaultResponse)

  return makeRequest(url.player.list(clubId, seasonId))
    .then(parseFn)
    .catch(() => defaultResponse)
}
