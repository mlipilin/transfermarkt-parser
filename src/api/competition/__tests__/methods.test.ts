import { list } from '../methods';

describe('src/api/competition/methods.ts', () => {
    const response = [{
        id: 'GB1',
        title: 'Premier League',
    }, {
        id: 'GB2',
        title: 'Championship',
    }, {
        id: 'GB3',
        title: 'League One',
    }, {
        id: 'GB4',
        title: 'League Two',
    }, {
        id: 'CNAT',
        title: 'National League',
    }, {
        id: 'GB21',
        title: 'Premier League 2',
    }, {
        id: 'GB18',
        title: 'U18 Premier League',
    }, {
        id: 'CGB',
        title: 'EFL Cup',
    }, {
        id: 'GBCS',
        title: 'Community Shield',
    }];

    // describe('list', () => {
    //     it('Should return correct result', async () => {
    //         await expect(list()).resolves.toEqual(response);
    //     });
    // });
});
