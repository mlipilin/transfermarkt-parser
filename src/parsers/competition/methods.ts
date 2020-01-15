import { JSDOM } from 'jsdom';

import { Competition } from './interface';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(countryId: number): Promise<Array<Competition>> {
    return makeRequest(url.competition.list(), {
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: `land_id=${countryId}`,
    }).then(
        parse(data => {
            const dom = new JSDOM(data);

            return [...dom.window.document.querySelectorAll('option')]
                .filter(node => !!node.getAttribute('value'))
                .map(node => {
                    const id = node.getAttribute('value');

                    return {
                        countryId,
                        id,
                        logoUrl: url.competition.logo(id),
                        title: node.innerHTML,
                    };
                });
        }),
    );
}
