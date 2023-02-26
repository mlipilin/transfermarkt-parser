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
  Season as SeasonType,
} from 'transfermarkt-parser'

// URL API
import urlApi from 'urlApi'

export default function Club() {
  const [competitionId, setCompetitionId] = useState<SelectValue>(null)
  const [countryId, setCountryId] = useState<SelectValue>(null)
  const [seasonId, setSeasonId] = useState<SelectValue>(null)

  const countries = useSWRImmutable<CountryType[]>(urlApi.country.list())
  const competitions = useSWRImmutable<CompetitionType[]>(
    countryId !== null ? urlApi.competition.list(countryId as number) : null
  )
  const seasons = useSWRImmutable<SeasonType[]>(
    competitionId ? urlApi.season.list(competitionId as string) : null
  )

  const responseCode = useSWR<string>(
    competitionId && seasonId
      ? urlApi.club.list(competitionId as string, seasonId as string)
      : null
  )

  const isShowResponse = !!seasonId

  const usageCode = `
import { season } from "transfermarkt-parser"

await season.list(${competitionId ? `'${competitionId}'` : null}, ${
    seasonId ? `'${seasonId}'` : null
  })
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
          <div className="mb-5">
            <Select
              disabled={responseCode.isLoading || !competitionId}
              isOptionsFetching={seasons.isLoading}
              placeholder="Season..."
              value={seasonId}
              onChange={setSeasonId}
            >
              {seasons.data?.map((season) => (
                <Option key={season.id} value={season?.id ? season.id : ''}>
                  {season.title}
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
