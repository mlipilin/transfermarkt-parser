import { JSDOM } from 'jsdom';

import { Country } from './interface';

// Constants
import { ERROR_PARSING } from '../../constants/errors';

// Make request
import makeRequest from '../make-request';

import url from '../../url';

export function list(): Promise<Array<Country>> {
    return makeRequest(url.country.list())
        .then(data => {
            try {
                const dom = new JSDOM(data);

                return [...dom.window.document.querySelectorAll('option')]
                    .filter(node => !!parseInt(node.getAttribute('value')))
                    .map(node => {
                        const id = parseInt(node.getAttribute('value'));

                        return {
                            flagUrl: url.country.flag(id),
                            id,
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
