import fetch, { RequestInfo, RequestInit } from 'node-fetch'

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
  url: RequestInfo,
  init?: RequestInit
) {
  // It needs to pass Transfernarkt DDoS protection
  timeout(Number(process.env.TRANSFERMARKT_DDOS_TIMEOUT) || 0)

  const response = await fetch(url, init)
  const responseText = await response.text()
  const { status } = response
  if (status >= 200 && status <= 299) {
    return responseText
  } else if (status === 404) {
    throw ERROR_NOT_FOUND
  }
  throw ERROR_SERVER
}
