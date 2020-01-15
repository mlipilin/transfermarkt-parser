// Constants
import { ERROR_NETWORK, ERROR_NOT_FOUND, ERROR_PARSING, ERROR_SERVER } from '../constants/errors';

export default (fn: (data: any) => any, defaultResult: any = undefined) => (data: any) => {
    try {
        return fn(data);
    } catch (error) {
        if (error === ERROR_NOT_FOUND) {
            return defaultResult;
        }
        if (error === ERROR_NETWORK || error === ERROR_SERVER) {
            throw error;
        }
        throw ERROR_PARSING;
    }
};
