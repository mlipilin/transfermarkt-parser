import axios from 'axios';
import { JSDOM } from 'jsdom';

import { iCompetition } from './interface';

import url from '../../url';

export function list (countryId): Promise<Array<iCompetition>> {
    return axios({
        method: 'post',
        url: url.competitionList(),
        data: {
            land_id: countryId,
        },
    })
        .then(response => {
            const dom = new JSDOM(response.data);
            console.log('response.data', response.data);

            return [];
            // return [...dom.window.document.querySelectorAll('option')]
            //     .filter(node => !!parseInt(node.getAttribute('value')))
            //     .map(node => ({
            //         id: parseInt(node.getAttribute('value')),
            //         title: node.innerHTML,
            //     }));
        })
        .catch(error => {
            console.log('error', error);
            return [];
        });
}
