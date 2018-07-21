import { list } from '../methods';

describe('src/api/competition/methods.ts', () => {
    describe('list', () => {
        it('Should return correct result for England (id=189)', async () => {
            const response = [
                { countryId: 189, id: 'GB1', title: 'Premier League' },
                { countryId: 189, id: 'GB2', title: 'Championship' },
                { countryId: 189, id: 'GB3', title: 'League One' },
                { countryId: 189, id: 'GB4', title: 'League Two' },
                { countryId: 189, id: 'CNAT', title: 'National League' },
                { countryId: 189, id: 'GB21', title: 'Premier League 2' },
                { countryId: 189, id: 'GB18', title: 'U18 Premier League' },
                { countryId: 189, id: 'GBFL', title: 'EFL Trophy'},
                { countryId: 189, id: 'CGB', title: 'EFL Cup' },
                { countryId: 189, id: 'GBCS', title: 'Community Shield' },
            ];
            await expect(list(189)).resolves.toEqual(response);
        });
        it('Should return correct result for France (id=50)', async () => {
            const response = [
                { countryId: 50, id: 'FR1', title: 'Ligue 1' },
                { countryId: 50, id: 'FR2', title: 'Ligue 2' },
                { countryId: 50, id: 'FR3', title: 'Championnat National' },
                { countryId: 50, id: 'FRC', title: 'Coupe de France' },
                { countryId: 50, id: 'FRCH', title: 'Trophée des Champions' },
                { countryId: 50, id: 'FRL', title: 'Coupe de la Ligue' },
            ];
            await expect(list(50)).resolves.toEqual(response);
        });
    });
});
