import axios from 'axios';

import makeRequest from './make-request';

// Constants
import { ERROR_NETWORK, ERROR_NOT_FOUND, ERROR_SERVER } from '../constants/errors';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('src/utils/make-request.ts', () => {
    describe('makeRequest', () => {
        describe('axios success', () => {
            it('status = [200...299]', async () => {
                const data = { foo: 'bar' };
                mockedAxios.request.mockResolvedValueOnce({ data, status: 200 });
                await expect(makeRequest('some url')).resolves.toEqual(data);
            });
            it('status = 404', async () => {
                mockedAxios.request.mockResolvedValueOnce({ status: 404 });
                await expect(makeRequest('some url')).rejects.toBe(ERROR_NOT_FOUND);
            });
            it('other error statuses', async () => {
                mockedAxios.request.mockResolvedValueOnce({ status: 500 });
                await expect(makeRequest('some url')).rejects.toBe(ERROR_SERVER);
            });
        });
        describe('axios error', () => {
            it('empty error', async () => {
                mockedAxios.request.mockRejectedValueOnce(null);
                await expect(makeRequest('some url')).rejects.toBe(ERROR_NETWORK);
            });
            it('"Max redirects exceeded" error', async () => {
                mockedAxios.request.mockRejectedValueOnce(new Error('Max redirects exceeded.'));
                await expect(makeRequest('some url')).rejects.toBe(ERROR_NOT_FOUND);
            });
            it('other errors', async () => {
                mockedAxios.request.mockRejectedValueOnce('other error');
                await expect(makeRequest('some url')).rejects.toBe('other error');
            });
        });
    });
});
