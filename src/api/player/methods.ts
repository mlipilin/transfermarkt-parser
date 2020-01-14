import { JSDOM } from 'jsdom';
import * as moment from 'moment';

// Constants
import { ERROR_PARSING } from '../../constants/errors';

// Make request
import makeRequest from '../make-request';

import { Player } from './interface';

import url from '../../url';

export function list(clubId: string, seasonId: string): Promise<Array<Player>> {
    return makeRequest(url.player.list(clubId, seasonId))
        .then(data => {
            try {
                const dom = new JSDOM(data);

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

                        const positionNode = node.querySelector(
                            'table.inline-table tr:last-child td',
                        );
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
            } catch (error) {
                throw ERROR_PARSING;
            }
        })
        .catch(error => {
            throw error;
        });
}
