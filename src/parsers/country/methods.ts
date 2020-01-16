import { JSDOM } from 'jsdom';

import { Country } from './interface';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(): Promise<Array<Country>> {
    const parseFn = parse(data => {
        const dom = new JSDOM(data);

        return [...dom.window.document.querySelectorAll('option')]
            .filter(node => !!parseInt(node.getAttribute('value')))
            .map(node => {
                const id = parseInt(node.getAttribute('value'));

                return {
                    flagUrl: url.country.flag(id),
                    id,
                    title: node.innerHTML,
                };
            });
    }, []);
    return makeRequest(url.country.list()).then(parseFn);
}
