import axios from 'axios';
import { JSDOM } from 'jsdom';

import { iSeason } from './interface';

import url from '../../url';

export function list (competitionId: string): Promise<Array<iSeason>> {
    return axios.get(url.seasonList(competitionId))
        .then(response => {
            const dom = new JSDOM(response.data);

            return [...dom.window.document.querySelectorAll('select[name=saison_id] option')]
                .filter(node => node.getAttribute('value'))
                .map(node => ({
                    competitionId,
                    id: node.getAttribute('value'),
                    title: node.innerHTML,
                }));

        })
}
