import { SWRConfig } from 'swr'

import type { AppProps } from 'next/app'

import Layout from 'components/layout'

import '../styles/globals.css'

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
