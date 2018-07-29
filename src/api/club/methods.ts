import axios from 'axios';
import { JSDOM } from 'jsdom';

import { iClub } from './interface';
import { getImageUrl } from './helpers';

import url from '../../url';

export function list (competitionId, seasonId): Promise<Array<iClub>> {
    return axios.get(url.clubList(competitionId, seasonId))
        .then(response => {
            const dom = new JSDOM(response.data);

            return [...dom.window.document.querySelectorAll('#yw1 tbody tr')]
                .filter(node => node.querySelector('.hauptlink a'))
                .map(node => {
                    const linkNode = node.querySelector('.hauptlink a');
                    const id = parseInt(linkNode.getAttribute('id'));

                    return {
                        id,
                        imageUrl: getImageUrl(id),
                        title: linkNode.innerHTML,
                    };
                });
        });
}
