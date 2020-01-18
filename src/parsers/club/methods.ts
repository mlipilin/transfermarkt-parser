import { JSDOM } from 'jsdom';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Interfaces
import { Club } from '../../interfaces';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(competitionId: string, seasonId: string): Promise<Array<Club>> {
    const parseFn = parse(data => {
        const dom = new JSDOM(data);

        // Correct page marker
        const markerNode = dom.window.document.querySelector(
            '#wettbewerbsstartseite .info-content',
        );
        const marker =
            markerNode &&
            markerNode.innerHTML &&
            markerNode.innerHTML.trim() === 'Competition startpage';
        if (!marker) {
            throw ERROR_NOT_FOUND;
        }

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
    }, []);
    return makeRequest(url.club.list(competitionId, seasonId)).then(parseFn);
}
