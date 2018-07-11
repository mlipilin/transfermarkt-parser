import { countryListUrl } from './url';

describe('url.ts', () => {
    describe('countryListUrl', () => {
        it('Should works correctly', () => {
            expect(countryListUrl()).toBe('https://www.transfermarkt.com/site/dropDownLaender')
        });
    });
});
