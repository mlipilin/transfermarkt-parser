import { JSDOM } from 'jsdom';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { Matchday, createMatchday } from '../../entities/matchday';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(competitionId: string, seasonId: string): Promise<Array<Matchday>> {
    const parseFn = parse(data => {
        if (!data) {
            throw ERROR_NOT_FOUND;
        }

        const dom = new JSDOM(data);

        return [...dom.window.document.querySelectorAll('.large-6.columns:not([id])')]
            .filter(node => !!node.querySelector('.table-header'))
            .map((node, index) =>
                createMatchday({
                    competitionId,
                    id: index + 1,
                    seasonId,
                    title: node.querySelector('.table-header').innerHTML,
                }),
            );
    }, []);
    return makeRequest(url.matchday.list(competitionId, seasonId)).then(parseFn);
}
