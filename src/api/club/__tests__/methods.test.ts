import { list } from '../methods';

describe('src/api/club/methods.ts', () => {
    describe('list', () => {
        it('Should return correct result for EPL, 17/18 (GB1, 2017)', async () => {
            const response = [
                {
                    id: 985,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/985.png',
                    title: 'Manchester United',
                },
                {
                    id: 631,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/631.png',
                    title: 'Chelsea FC',
                },
                {
                    id: 11,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/11.png',
                    title: 'Arsenal FC',
                },
                {
                    id: 281,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/281.png',
                    title: 'Manchester City',
                },
                {
                    id: 148,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/148.png',
                    title: 'Tottenham Hotspur',
                },
                {
                    id: 31,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/31.png',
                    title: 'Liverpool FC',
                },
                {
                    id: 29,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/29.png',
                    title: 'Everton FC',
                },
                {
                    id: 379,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/379.png',
                    title: 'West Ham United',
                },
                {
                    id: 1003,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/1003.png',
                    title: 'Leicester City',
                },
                {
                    id: 180,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/180.png',
                    title: 'Southampton FC',
                },
                {
                    id: 873,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/873.png',
                    title: 'Crystal Palace',
                },
                {
                    id: 512,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/512.png',
                    title: 'Stoke City',
                },
                {
                    id: 2288,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/2288.png',
                    title: 'Swansea City',
                },
                {
                    id: 1010,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/1010.png',
                    title: 'Watford FC',
                },
                {
                    id: 762,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/762.png',
                    title: 'Newcastle United',
                },
                {
                    id: 984,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/984.png',
                    title: 'West Bromwich Albion',
                },
                {
                    id: 989,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/989.png',
                    title: 'AFC Bournemouth',
                },
                {
                    id: 1237,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/1237.png',
                    title: 'Brighton &amp; Hove Albion',
                },
                {
                    id: 1132,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/1132.png',
                    title: 'Burnley FC',
                },
                {
                    id: 1110,
                    imageUrl: 'https://tmssl.akamaized.net//images/wappen/head/1110.png',
                    title: 'Huddersfield Town',
                }
            ];
            await expect(list('GB1', '2017')).resolves.toEqual(response);
        });
    });
})
