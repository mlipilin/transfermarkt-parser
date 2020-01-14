import { JSDOM } from 'jsdom';

import { Club } from './interface';

// Constants
import { ERROR_PARSING } from '../../constants/errors';

// Make request
import makeRequest from '../make-request';

import url from '../../url';

export function list(competitionId: string, seasonId: string): Promise<Array<Club>> {
    return makeRequest(url.club.list(competitionId, seasonId))
        .then(data => {
            try {
                const dom = new JSDOM(data);

                return [...dom.window.document.querySelectorAll('#yw1 tbody tr')]
                    .filter(node => node.querySelector('.hauptlink a'))
                    .map(node => {
                        const linkNode = node.querySelector('.hauptlink a');
                        const id = parseInt(linkNode.getAttribute('id'));

                        return {
                            id,
                            logoUrl: url.club.logo(id),
                            title: linkNode.innerHTML,
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
