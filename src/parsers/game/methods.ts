import { JSDOM } from 'jsdom';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { Game, createGame } from '../../entities/game';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(
    competitionId: string,
    seasonId: string,
    matchday: number,
): Promise<Array<Game>> {
    const parseFn = parse(data => {
        if (!data) {
            throw ERROR_NOT_FOUND;
        }

        const dom = new JSDOM(data);

        return [
            ...dom.window.document.querySelectorAll(
                '.large-8.columns > .box:not(:first-child):not(:last-child)',
            ),
        ].map(node => {
            // Id
            const gameLinkNode = node.querySelector('.ergebnis-box > a');
            let id = null;
            if (gameLinkNode && gameLinkNode.href) {
                const hrefParts = gameLinkNode.href.split('/');
                id = hrefParts.length > 1 ? hrefParts[hrefParts.length - 1] : null;
            }

            // Goals
            const goalsNode = gameLinkNode.querySelector('span');
            let club1Goals = null;
            let club2Goals = null;
            if (goalsNode) {
                const [club1G = null, club2G = null] = goalsNode.innerHTML
                    ? goalsNode.innerHTML.trim().split(':')
                    : [];
                club1Goals = club1G && club1G !== '-' ? Number(club1G) : null;
                club2Goals = club2G && club2G !== '-' ? Number(club2G) : null;
            }

            // Club1
            const club1Node = node.querySelector(
                'tr.table-grosse-schrift > td:nth-child(1) > a.vereinprofil_tooltip',
            );
            const club1Id = club1Node ? Number(club1Node.id) : null;

            // Club2
            const club2Node = node.querySelector(
                'tr.table-grosse-schrift > td:nth-child(8) > a.vereinprofil_tooltip',
            );
            const club2Id = club2Node ? Number(club2Node.id) : null;

            return createGame({
                club1Goals,
                club2Goals,
                club1Id,
                club2Id,
                competitionId,
                id,
                matchday,
                seasonId,
            });
        });
    }, []);
    return makeRequest(url.game.list(competitionId, seasonId, matchday)).then(parseFn);
}
