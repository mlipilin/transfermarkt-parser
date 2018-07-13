import axios from 'axios';
import { JSDOM } from 'jsdom';

import { iCompetition } from './interface';

import url from '../../url';

export function list (countryId: number): Promise<Array<iCompetition>> {
    return axios({
        url: url.competitionList(),
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: `land_id=${countryId}`
    })
        .then(response => {
            const dom = new JSDOM(response.data);

            return [...dom.window.document.querySelectorAll('option')]
                .filter(node => !!node.getAttribute('value'))
                .map(node => ({
                    countryId,
                    id: node.getAttribute('value'),
                    title: node.innerHTML,
                }));
        });
}
