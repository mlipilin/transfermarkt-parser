import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Constants
import { ERROR_NETWORK, ERROR_NOT_FOUND, ERROR_SERVER } from '../constants/errors';

const knownErrors = [ERROR_NETWORK, ERROR_NOT_FOUND, ERROR_SERVER];

export default async function makeRequest(url: string, params: AxiosRequestConfig = {}) {
    try {
        const response: AxiosResponse = await axios.request({ url, ...params });
        const { data, status } = response;
        if (status >= 200 && status <= 299) {
            return data;
        } else if (status === 404) {
            throw ERROR_NOT_FOUND;
        }
        throw ERROR_SERVER;
    } catch (error) {
        let finalError = error;

        const isErrorUnknown = !knownErrors.includes(error);
        const isErrorAxios = !!error && error.isAxiosError;

        if (isErrorAxios) {
            const axiosError = error as AxiosError;
            const isError404 =
                (axiosError.response && axiosError.response.status === 404) ||
                axiosError.message === 'Max redirects exceeded.';
            if (isError404) {
                finalError = ERROR_NOT_FOUND;
            } else {
                finalError = ERROR_NETWORK;
            }
        } else if (isErrorUnknown) {
            finalError = ERROR_NETWORK;
        }

        if (finalError === ERROR_NOT_FOUND) {
            return null;
        }

        throw finalError;
    }
}
