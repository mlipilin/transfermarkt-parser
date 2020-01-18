import { JSDOM } from 'jsdom';
import * as moment from 'moment';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Interfaces
import { Player } from '../../interfaces';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(clubId: number, seasonId: string): Promise<Array<Player>> {
    const parseFn = parse(data => {
        const dom = new JSDOM(data);

        // Correct page marker
        const markerNode = dom.window.document.querySelector('#verein_head .dataMarktwert p');
        const marker =
            markerNode &&
            markerNode.innerHTML &&
            markerNode.innerHTML.trim() === 'Total market value';
        if (!marker) {
            throw ERROR_NOT_FOUND;
        }

        return [...dom.window.document.querySelectorAll('#yw1 table.items > tbody > tr')]
            .filter(node => node.querySelector('.hauptlink a'))
            .map(node => {
                const linkNode = node.querySelector('.hauptlink a');
                const id = parseInt(linkNode.getAttribute('id'));
                const name = linkNode.innerHTML;

                const numberNode = node.querySelector('.rn_nummer');
                const number = numberNode ? numberNode.innerHTML : '-';

                const logoNode = node.querySelector('table.inline-table img');
                const logoUrl =
                    logoNode && logoNode.src ? logoNode.src.replace('small', 'big') : null;

                const positionNode = node.querySelector('table.inline-table tr:last-child td');
                const position = positionNode.innerHTML || null;

                const birthdayNode = node.querySelector('td:nth-child(3)');
                const birthday = birthdayNode
                    ? moment(birthdayNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
                    : null;

                const nationalitiesNodes = node.querySelectorAll('td:nth-child(4) > img');
                let nationalities = [];
                if (nationalitiesNodes) {
                    nationalitiesNodes.forEach(nationalityNode => {
                        nationalities.push(nationalityNode ? nationalityNode.title : null);
                    });
                }

                return {
                    id,
                    logoUrl,
                    name,
                    birthday,
                    nationalities,
                    number: number === '-' ? null : parseInt(number),
                    position,
                };
            });
    }, []);
    return makeRequest(url.player.list(clubId, seasonId)).then(parseFn);
}
