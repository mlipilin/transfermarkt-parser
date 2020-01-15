// Constants
import { ERROR_PARSING } from '../constants/errors';

export default fn => data => {
    try {
        return fn(data);
    } catch (error) {
        throw ERROR_PARSING;
    }
};
