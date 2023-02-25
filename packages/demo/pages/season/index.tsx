import { useState } from 'react'

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

import Head from 'next/head'

// Components
import CodeBlock from 'components/CodeBlock'
import Option from 'components/Option'
import Select, { Value as SelectValue } from 'components/Select'
import Page from 'components/Page'

// Types
import {
  Country as CountryType,
  Competition as CompetitionType,
} from 'transfermarkt-parser'

export default function Season() {
  const [competitionId, setCompetitionId] = useState<SelectValue>(null)
  const [countryId, setCountryId] = useState<SelectValue>(null)

  const countries = useSWRImmutable<CountryType[]>('/api/country/list')
  const competitions = useSWRImmutable<CompetitionType[]>(
    countryId !== null ? `/api/competition/list?countryId=${countryId}` : null
  )
  const responseCode = useSWR<string>(
    competitionId ? `/api/season/list?competitionId=${competitionId}` : null
  )

  const isShowResponse = !!competitionId

  const usageCode = `
import { season } from "transfermarkt-parser"

await season.list(${competitionId ? `'${competitionId}'` : null})
  `.trim()

  return (
    <>
      <Head>
        <title>Season - Transfermarkt Parser</title>
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
          <div className="mb-5">
            <Select
              disabled={responseCode.isLoading || !countryId}
              isOptionsFetching={competitions.isLoading}
              placeholder="Competition..."
              value={competitionId}
              onChange={setCompetitionId}
            >
              {competitions.data?.map((competition) => (
                <Option
                  key={competition.id}
                  value={competition?.id ? competition.id : ''}
                >
                  {competition.title}
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
