import { list } from '../methods';

// Entities
import { createClub } from '../../../entities/club';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/club/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for EPL, 17/18 (GB1, 2017)',
            async () => {
                const response = [
                    createClub({
                        id: 631,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/631.png',
                        title: 'Chelsea FC',
                    }),
                    createClub({
                        id: 985,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/985.png',
                        title: 'Manchester United',
                    }),
                    createClub({
                        id: 11,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/11.png',
                        title: 'Arsenal FC',
                    }),
                    createClub({
                        id: 281,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/281.png',
                        title: 'Manchester City',
                    }),
                    createClub({
                        id: 148,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/148.png',
                        title: 'Tottenham Hotspur',
                    }),
                    createClub({
                        id: 31,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/31.png',
                        title: 'Liverpool FC',
                    }),
                    createClub({
                        id: 29,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/29.png',
                        title: 'Everton FC',
                    }),
                    createClub({
                        id: 379,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/379.png',
                        title: 'West Ham United',
                    }),
                    createClub({
                        id: 1003,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/1003.png',
                        title: 'Leicester City',
                    }),
                    createClub({
                        id: 180,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/180.png',
                        title: 'Southampton FC',
                    }),
                    createClub({
                        id: 873,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/873.png',
                        title: 'Crystal Palace',
                    }),
                    createClub({
                        id: 512,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/512.png',
                        title: 'Stoke City',
                    }),
                    createClub({
                        id: 2288,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/2288.png',
                        title: 'Swansea City',
                    }),
                    createClub({
                        id: 1010,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/1010.png',
                        title: 'Watford FC',
                    }),
                    createClub({
                        id: 762,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/762.png',
                        title: 'Newcastle United',
                    }),
                    createClub({
                        id: 984,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/984.png',
                        title: 'West Bromwich Albion',
                    }),
                    createClub({
                        id: 989,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/989.png',
                        title: 'AFC Bournemouth',
                    }),
                    createClub({
                        id: 1237,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/1237.png',
                        title: 'Brighton &amp; Hove Albion',
                    }),
                    createClub({
                        id: 1132,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/1132.png',
                        title: 'Burnley FC',
                    }),
                    createClub({
                        id: 1110,
                        logoUrl: 'https://tmssl.akamaized.net//images/wappen/head/1110.png',
                        title: 'Huddersfield Town',
                    }),
                ];
                await expect(list('GB1', '2017')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for NO provided params',
            async () => {
                const response = [];
                await expect(list(undefined, undefined)).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for INcorrect params',
            async () => {
                const response = [];
                await expect(list('aaa', 'bbb')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});
