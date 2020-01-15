import parse from '../parse';

// Constants
import { ERROR_NETWORK, ERROR_PARSING } from '../../constants/errors';

describe('src/utils/parse.ts', () => {
    describe('parse', () => {
        it('success case', () => {
            const fn = data => data;
            expect(parse(fn)(1)).toBe(1);
        });
        it('error case (known)', () => {
            const fn = data => {
                throw ERROR_NETWORK;
            };
            expect(() => parse(fn)(1)).toThrow(ERROR_NETWORK);
        });
        it('error case (UNknown)', () => {
            const fn = data => {
                throw new Error(data);
            };
            expect(() => parse(fn)(1)).toThrow(ERROR_PARSING);
        });
    });
});
