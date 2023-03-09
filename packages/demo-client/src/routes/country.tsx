import useSWR from 'swr'

// Components
import CodeBlock from '../components/CodeBlock'
import Page from '../components/Page'

// URL API
import urlApi from '../urlApi'

export default function RouteCountry() {
  const responseCode = useSWR<string>(urlApi.country.list())

  const usageCode = `
import { country } from "transfermarkt-parser"

await country.list()
  `.trim()

  return (
    <>
      <Page.Sidebar />
      <Page.Main>
        <CodeBlock code={usageCode} language="javascript" title="Usage" />
        <div className="mt-6">
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
