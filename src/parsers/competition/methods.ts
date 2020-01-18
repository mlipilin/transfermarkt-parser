import { JSDOM } from 'jsdom';

// Entities
import { Competition, createCompetition } from '../../entities/competition';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(countryId: number): Promise<Array<Competition>> {
    const parseFn = parse(data => {
        const dom = new JSDOM(data);

        return [...dom.window.document.querySelectorAll('option')]
            .filter(node => !!node.getAttribute('value'))
            .map(node => {
                const id = node.getAttribute('value');

                return createCompetition({
                    countryId,
                    id,
                    logoUrl: url.competition.logo(id),
                    title: node.innerHTML,
                });
            });
    }, []);
    return makeRequest(url.competition.list(), {
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: `land_id=${countryId}`,
    }).then(parseFn);
}
