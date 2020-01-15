import parse from './parse';

// Constants
import { ERROR_PARSING } from '../constants/errors';

describe('src/utils/parse.ts', () => {
    describe('parse', () => {
        it('success case', () => {
            const fn = data => data;
            expect(parse(fn)(1)).toBe(1);
        });
        it('error case', () => {
            const fn = data => {
                throw new Error(data);
            };
            expect(() => parse(fn)(1)).toThrow(ERROR_PARSING);
        });
    });
});
