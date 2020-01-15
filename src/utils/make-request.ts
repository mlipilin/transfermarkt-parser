import axios from 'axios';

// Constants
import { ERROR_NETWORK, ERROR_NOT_FOUND, ERROR_SERVER } from '../constants/errors';

export default async function makeRequest(url: string, params: object = {}) {
    try {
        const response = await axios.request({ url, ...params });
        const { data, status } = response;
        if (status >= 200 && status <= 299) {
            return data;
        } else if (status === 404) {
            throw ERROR_NOT_FOUND;
        }
        throw ERROR_SERVER;
    } catch (error) {
        if (!error) {
            throw ERROR_NETWORK;
        } else if (error instanceof Error) {
            if (error.message === 'Max redirects exceeded.') {
                throw ERROR_NOT_FOUND;
            } else {
                throw ERROR_NETWORK;
            }
        }
        throw error;
    }
}
