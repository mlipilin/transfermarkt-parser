import { JSDOM } from 'jsdom';

import { Competition } from './interface';

// Constants
import { ERROR_PARSING } from '../../constants/errors';

// Make request
import makeRequest from '../make-request';

import url from '../../url';

export function list(countryId: number): Promise<Array<Competition>> {
    return makeRequest(url.competition.list(), {
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: `land_id=${countryId}`,
    })
        .then(data => {
            try {
                const dom = new JSDOM(data);

                return [...dom.window.document.querySelectorAll('option')]
                    .filter(node => !!node.getAttribute('value'))
                    .map(node => {
                        const id = node.getAttribute('value');

                        return {
                            countryId,
                            id,
                            logoUrl: url.competition.logo(id),
                            title: node.innerHTML,
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
