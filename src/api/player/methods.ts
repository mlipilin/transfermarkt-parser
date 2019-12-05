import axios from 'axios';
import { JSDOM } from 'jsdom';
import * as moment from 'moment';

import { iPlayer } from './interface';

import url from '../../url';

export function list(clubId, seasonId): Promise<Array<iPlayer>> {
    return axios.get(url.player.list(clubId, seasonId)).then(response => {
        const dom = new JSDOM(response.data);

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
    });
}
