import axios from 'axios';
import { JSDOM } from 'jsdom';

import { iCountry } from './interface';

import url from '../../url';

export function list (): Promise<Array<iCountry>> {
    return axios.get(url.country.list())
        .then(response => {
            const dom = new JSDOM(response.data);

            return [...dom.window.document.querySelectorAll('option')]
                .filter(node => !!parseInt(node.getAttribute('value')))
                .map(node => ({
                    id: parseInt(node.getAttribute('value')),
                    title: node.innerHTML,
                }));
        });
}
