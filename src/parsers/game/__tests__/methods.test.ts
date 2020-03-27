import { list } from '../methods';

// Constants
import { ERROR_PARSING } from '../../../constants/errors';

// Entities
import { createGame } from '../../../entities/game';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/game/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for Bundes Liga, 17/18, matchday 3 (L1, 2017, 3)',
            async () => {
                const response = [
                    createGame({
                        club1Goals: 0,
                        club2Goals: 2,
                        club1Id: 41,
                        club2Id: 23826,
                        competitionId: 'L1',
                        id: '2871597',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 1,
                        club2Goals: 1,
                        club1Id: 82,
                        club2Id: 42,
                        competitionId: 'L1',
                        id: '2871599',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 3,
                        club2Goals: 1,
                        club1Id: 39,
                        club2Id: 15,
                        competitionId: 'L1',
                        id: '2871598',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 3,
                        club2Goals: 0,
                        club1Id: 167,
                        club2Id: 3,
                        competitionId: 'L1',
                        id: '2871596',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 0,
                        club2Goals: 1,
                        club1Id: 18,
                        club2Id: 24,
                        competitionId: 'L1',
                        id: '2871594',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 0,
                        club2Goals: 0,
                        club1Id: 60,
                        club2Id: 16,
                        competitionId: 'L1',
                        id: '2871593',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 2,
                        club2Goals: 0,
                        club1Id: 533,
                        club2Id: 27,
                        competitionId: 'L1',
                        id: '2871591',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 1,
                        club2Goals: 1,
                        club1Id: 44,
                        club2Id: 86,
                        competitionId: 'L1',
                        id: '2871592',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                    createGame({
                        club1Goals: 3,
                        club2Goals: 1,
                        club1Id: 33,
                        club2Id: 79,
                        competitionId: 'L1',
                        id: '2871595',
                        matchday: 3,
                        seasonId: '2017',
                    }),
                ];
                await expect(list('L1', '2017', 3)).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should an empty array for too early year (GB1, 1900, 1)',
            async () => {
                await expect(list('GB1', '1900', 1)).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should an empty array for too late year (GB1, 2900)',
            async () => {
                await expect(list('GB1', '2900', 1)).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for NO provided params',
            async () => {
                await expect(list(undefined, undefined, undefined)).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for INcorrect params',
            async () => {
                await expect(list('aaa', 'bbb', 123123)).rejects.toBe(ERROR_PARSING);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});
