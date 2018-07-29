import { getImageUrl } from '../helpers';

describe('src/api/club/helpers.ts', () => {
    describe('getImageUrl', () => {
        it('Should return a correct result', () => {
            expect(getImageUrl(1)).toBe('https://tmssl.akamaized.net//images/wappen/head/1.png');
        });
    });
});
