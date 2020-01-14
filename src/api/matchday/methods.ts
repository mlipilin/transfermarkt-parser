import { JSDOM } from 'jsdom';

import { Matchday } from './interface';

// Constants
import { ERROR_PARSING } from '../../constants/errors';

// Make request
import makeRequest from '../make-request';

import url from '../../url';

export function list(competitionId: string, seasonId: string): Promise<Array<Matchday>> {
    return makeRequest(url.matchday.list(competitionId, seasonId))
        .then(data => {
            try {
                const dom = new JSDOM(data);

                return [...dom.window.document.querySelectorAll('.large-6.columns:not([id])')]
                    .filter(node => !!node.querySelector('.table-header'))
                    .map((node, index) => ({
                        competitionId,
                        id: index + 1,
                        seasonId,
                        title: node.querySelector('.table-header').innerHTML,
                    }));
            } catch (error) {
                throw ERROR_PARSING;
            }
        })
        .catch(error => {
            throw error;
        });
}
