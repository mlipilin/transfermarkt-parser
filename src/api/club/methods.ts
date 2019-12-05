import axios from 'axios';
import { JSDOM } from 'jsdom';

import { Club } from './interface';

import url from '../../url';

export function list(competitionId, seasonId): Promise<Array<Club>> {
    return axios.get(url.club.list(competitionId, seasonId)).then(response => {
        const dom = new JSDOM(response.data);

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
    });
}
