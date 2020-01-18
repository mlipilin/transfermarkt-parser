import { JSDOM } from 'jsdom';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { Season, createSeason } from '../../entities/season';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(competitionId: string): Promise<Array<Season>> {
    const parseFn = parse(data => {
        if (!data) {
            throw ERROR_NOT_FOUND;
        }

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
            .map(node =>
                createSeason({
                    competitionId,
                    id: node.getAttribute('value'),
                    title: node.innerHTML,
                }),
            );
    }, []);
    return makeRequest(url.season.list(competitionId)).then(parseFn);
}
