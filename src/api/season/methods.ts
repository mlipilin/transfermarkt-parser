import axios from 'axios';
import { JSDOM } from 'jsdom';

import { Season } from './interface';

// Constants
import { ERROR_PARSING } from '../../constants/errors';

// Make request
import makeRequest from '../make-request';

import url from '../../url';

export function list(competitionId: string): Promise<Array<Season>> {
    return makeRequest(url.season.list(competitionId))
        .then(data => {
            try {
                const dom = new JSDOM(data);

                return [...dom.window.document.querySelectorAll('select[name=saison_id] option')]
                    .filter(node => node.getAttribute('value'))
                    .map(node => ({
                        competitionId,
                        id: node.getAttribute('value'),
                        title: node.innerHTML,
                    }));
            } catch (error) {
                throw ERROR_PARSING;
            }
        })
        .catch(error => {
            throw error;
        });
}
