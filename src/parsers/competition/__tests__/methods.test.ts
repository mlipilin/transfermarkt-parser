import { list } from '../methods';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/competition/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for England (id=189)',
            async () => {
                const response = [
                    {
                        countryId: 189,
                        id: 'GB1',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gb1.png',
                        title: 'Premier League',
                    },
                    {
                        countryId: 189,
                        id: 'GB2',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gb2.png',
                        title: 'Championship',
                    },
                    {
                        countryId: 189,
                        id: 'GB3',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gb3.png',
                        title: 'League One',
                    },
                    {
                        countryId: 189,
                        id: 'GB4',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gb4.png',
                        title: 'League Two',
                    },
                    {
                        countryId: 189,
                        id: 'CNAT',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/cnat.png',
                        title: 'National League',
                    },
                    {
                        countryId: 189,
                        id: 'GB18',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gb18.png',
                        title: 'U18 Premier League',
                    },
                    {
                        countryId: 189,
                        id: 'GB21',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gb21.png',
                        title: 'Premier League 2',
                    },
                    {
                        countryId: 189,
                        id: 'FAC',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/fac.png',
                        title: 'FA Cup',
                    },
                    {
                        countryId: 189,
                        id: 'CGB',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/cgb.png',
                        title: 'EFL Cup',
                    },
                    {
                        countryId: 189,
                        id: 'GBCS',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gbcs.png',
                        title: 'Community Shield',
                    },
                    {
                        countryId: 189,
                        id: 'FAYC',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/fayc.png',
                        title: 'FA Youth Cup',
                    },
                    {
                        countryId: 189,
                        id: 'GBFL',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/gbfl.png',
                        title: 'EFL Trophy',
                    },
                ];
                await expect(list(189)).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return correct result for France (id=50)',
            async () => {
                const response = [
                    {
                        countryId: 50,
                        id: 'FR1',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/fr1.png',
                        title: 'Ligue 1',
                    },
                    {
                        countryId: 50,
                        id: 'FR2',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/fr2.png',
                        title: 'Ligue 2',
                    },
                    {
                        countryId: 50,
                        id: 'FR3',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/fr3.png',
                        title: 'Championnat National',
                    },
                    {
                        countryId: 50,
                        id: 'FRC',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/frc.png',
                        title: 'Coupe de France',
                    },
                    {
                        countryId: 50,
                        id: 'FRCH',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/frch.png',
                        title: 'Trophée des Champions',
                    },
                    {
                        countryId: 50,
                        id: 'FRL',
                        logoUrl: 'https://tmssl.akamaized.net//images/logo/normal/frl.png',
                        title: 'Coupe de la Ligue',
                    },
                ];
                await expect(list(50)).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});
