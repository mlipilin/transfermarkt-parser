import axios from 'axios';

import makeRequest from '../make-request';

// Constants
import { ERROR_NETWORK, ERROR_NOT_FOUND, ERROR_SERVER } from '../../constants/errors';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('src/utils/make-request.ts', () => {
    describe('makeRequest', () => {
        describe('success', () => {
            it('status = [200...299] -> DATA', async () => {
                const data = { foo: 'bar' };
                mockedAxios.request.mockResolvedValueOnce({ data, status: 200 });
                await expect(makeRequest('some url')).resolves.toEqual(data);
            });
            it('status = 404 -> NULL', async () => {
                mockedAxios.request.mockResolvedValueOnce({ status: 404 });
                await expect(makeRequest('some url')).resolves.toBeNull();
            });
            it('other error statuses -> THROW', async () => {
                mockedAxios.request.mockResolvedValueOnce({ status: 500 });
                await expect(makeRequest('some url')).rejects.toBe(ERROR_SERVER);
            });
        });
        describe('error', () => {
            describe('isErrorAxios', () => {
                it('status = 404 -> NULL', async () => {
                    mockedAxios.request.mockRejectedValueOnce({
                        isAxiosError: true,
                        response: { status: 404 },
                    });
                    await expect(makeRequest('some url')).resolves.toBeNull();
                });
                it('message = "Max redirects exceeded." -> NULL', async () => {
                    mockedAxios.request.mockRejectedValueOnce({
                        isAxiosError: true,
                        message: 'Max redirects exceeded.',
                    });
                    await expect(makeRequest('some url')).resolves.toBeNull();
                });
                it('other error -> ERROR_NETWORK', async () => {
                    mockedAxios.request.mockRejectedValueOnce({
                        isAxiosError: true,
                    });
                    await expect(makeRequest('some url')).rejects.toBe(ERROR_NETWORK);
                });
            });
            describe('isErrorUnknown', () => {
                it('empty error -> ERROR_NETWORK', async () => {
                    mockedAxios.request.mockRejectedValueOnce(null);
                    await expect(makeRequest('some url')).rejects.toBe(ERROR_NETWORK);
                });
                it('other error', async () => {
                    mockedAxios.request.mockRejectedValueOnce(new Error('other error'));
                    await expect(makeRequest('some url')).rejects.toBe(ERROR_NETWORK);
                });
            });
        });
    });
});
