import axios from 'axios';
import { JSDOM } from 'jsdom';

import { iMatchday } from './interface';

import url from '../../url';

export function list (competitionId: string, seasonId: string): Promise<Array<iMatchday>> {
    return axios.get(url.matchdayList(competitionId, seasonId))
        .then(response => {
            const dom = new JSDOM(response.data);

            return [...dom.window.document.querySelectorAll('.large-6.columns:not([id])')]
                .filter(node => !!node.querySelector('.table-header'))
                .map((node, index) => ({
                    competitionId,
                    id: index + 1,
                    seasonId,
                    title: node.querySelector('.table-header').innerHTML,
                }));

        })
}
