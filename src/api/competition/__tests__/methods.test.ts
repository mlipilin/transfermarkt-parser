import { list } from '../methods';

describe('src/api/competition/methods.ts', () => {
    describe('list', () => {
        it('Should return correct result for England (id=189)', async () => {
            const response = [
                { id: 'GB1', title: 'Premier League' },
                { id: 'GB2', title: 'Championship' },
                { id: 'GB3', title: 'League One' },
                { id: 'GB4', title: 'League Two' },
                { id: 'CNAT', title: 'National League' },
                { id: 'GB21', title: 'Premier League 2' },
                { id: 'GB18', title: 'U18 Premier League' },
                { id: 'CGB', title: 'EFL Cup' },
                { id: 'GBCS', title: 'Community Shield' },
            ];
            await expect(list(189)).resolves.toEqual(response);
        });
        it('Should return correct result for France (id=50)', async () => {
            const response = [
                { id: 'FR1', title: 'Ligue 1' },
                { id: 'FR2', title: 'Ligue 2' },
                { id: 'FR3', title: 'Championnat National' },
                { id: 'FRC', title: 'Coupe de France' },
                { id: 'FRCH', title: 'Trophée des Champions' },
                { id: 'FRL', title: 'Coupe de la Ligue' },
            ];
            await expect(list(50)).resolves.toEqual(response);
        });
    });
});
