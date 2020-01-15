// Constants
import * as ERROR from '../constants/errors';

export default fn => data => {
    try {
        return fn(data);
    } catch (error) {
        const knownErrors = Object.values(ERROR);
        if (knownErrors.includes(error)) {
            throw error;
        }
        throw ERROR.ERROR_PARSING;
    }
};
