import { JSDOM } from 'jsdom';

import { Season } from './interface';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(competitionId: string): Promise<Array<Season>> {
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

        return [...dom.window.document.querySelectorAll('select[name=saison_id] option')]
            .filter(node => node.getAttribute('value'))
            .map(node => ({
                competitionId,
                id: node.getAttribute('value'),
                title: node.innerHTML,
            }));
    }, []);
    return makeRequest(url.season.list(competitionId)).then(parseFn);
}
