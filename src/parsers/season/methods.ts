import { JSDOM } from 'jsdom';

import { Season } from './interface';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(competitionId: string): Promise<Array<Season>> {
    const parseFn = parse(data => {
        const dom = new JSDOM(data);

        return [...dom.window.document.querySelectorAll('select[name=saison_id] option')]
            .filter(node => node.getAttribute('value'))
            .map(node => ({
                competitionId,
                id: node.getAttribute('value'),
                title: node.innerHTML,
            }));
    });
    return makeRequest(url.season.list(competitionId)).then(parseFn);
}
