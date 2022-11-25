import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// Constants
import { ERROR_NOT_FOUND, ERROR_SERVER } from '../constants/errors'

function timeout(ms: number) {
  const start = Date.now()
  let now = Date.now()
  while (now - start < ms) {
    now = Date.now()
  }
}

export default async function makeRequest(
  url: string,
  params: AxiosRequestConfig = {}
) {
  // It needs to pass Transfernarkt DDoS protection
  timeout(5000)
  const response: AxiosResponse = await axios.request({ url, ...params })
  const { data, status } = response
  if (status >= 200 && status <= 299) {
    return data
  } else if (status === 404) {
    throw ERROR_NOT_FOUND
  }
  throw ERROR_SERVER
}
