import useSWR from 'swr'

import Head from 'next/head'

// Components
import CodeBlock from 'components/CodeBlock'
import Page from 'components/Page'

// URL API
import urlApi from 'urlApi'

export default function Country() {
  const responseCode = useSWR<string>(urlApi.country.list())

  const usageCode = `
import { country } from "transfermarkt-parser"

await country.list()
  `.trim()

  return (
    <>
      <Head>
        <title>Country - Transfermarkt Parser</title>
      </Head>
      <Page.Sidebar />
      <Page.Main>
        <CodeBlock code={usageCode} language="javascript" title="Usage" />
        <div className="mt-4">
          <CodeBlock
            code={JSON.stringify(responseCode.data, null, 2)}
            isLoading={responseCode.isLoading}
            language="json"
            title="Response"
          />
        </div>
      </Page.Main>
    </>
  )
}
