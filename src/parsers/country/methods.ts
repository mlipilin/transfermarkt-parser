import { JSDOM } from 'jsdom';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { Country, createCountry } from '../../entities/country';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(): Promise<Array<Country>> {
    const parseFn = parse(data => {
        if (!data) {
            throw ERROR_NOT_FOUND;
        }

        const dom = new JSDOM(data);

        return [...dom.window.document.querySelectorAll('option')]
            .filter(node => !!parseInt(node.getAttribute('value')))
            .map(node => {
                const id = parseInt(node.getAttribute('value'));

                return createCountry({
                    flagUrl: url.country.flag(id),
                    id,
                    title: node.innerHTML,
                });
            });
    }, []);
    return makeRequest(url.country.list()).then(parseFn);
}
