import { useState } from 'react'

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

import Head from 'next/head'

// Components
import CodeBlock from 'components/CodeBlock'
import Option from 'components/Option'
import Page from 'components/Page'
import Select, { Value as SelectValue } from 'components/Select'

// Types
import { Country as CountryType } from 'transfermarkt-parser'

export default function Competition() {
  const [countryId, setCountryId] = useState<SelectValue>(null)

  const countries = useSWRImmutable<CountryType[]>('/api/country/list')
  const responseCode = useSWR<string>(
    countryId ? `/api/competition/list?countryId=${countryId}` : null
  )

  const isShowResponse = !!countryId

  const usageCode = `
import { competition } from "transfermarkt-parser"

await competition.list(${countryId})
  `.trim()

  return (
    <>
      <Head>
        <title>Competition - Transfermarkt Parser</title>
      </Head>
      <Page.Sidebar>
        <h2 className="mb-4 text-xl">Filters</h2>
        <form>
          <div className="mb-5">
            <Select
              disabled={responseCode.isLoading}
              isOptionsFetching={countries.isLoading}
              placeholder="Country..."
              value={countryId}
              onChange={setCountryId}
            >
              {countries.data?.map((country) => (
                <Option key={country.id} value={country?.id ? country.id : ''}>
                  {country.title}
                </Option>
              )) || []}
            </Select>
          </div>
        </form>
      </Page.Sidebar>
      <Page.Main>
        <CodeBlock code={usageCode} language="javascript" title="Usage" />
        {isShowResponse && (
          <div className="mt-4">
            <CodeBlock
              code={JSON.stringify(responseCode.data, null, 2)}
              isLoading={responseCode.isLoading}
              language="json"
              title="Response"
            />
          </div>
        )}
      </Page.Main>
    </>
  )
}