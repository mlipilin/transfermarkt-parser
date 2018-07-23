import { getLogoUrl } from '../helpers';

describe('src/api/club/helpers.ts', () => {
    describe('getLogoUrl', () => {
        it('Should return a correct result', () => {
            expect(getLogoUrl(1)).toBe('https://tmssl.akamaized.net//images/wappen/head/1.png');
        });
    });
});
