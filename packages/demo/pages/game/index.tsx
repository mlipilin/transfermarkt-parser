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
  Matchday as MatchdayType,
  Season as SeasonType,
} from 'transfermarkt-parser'

// URL API
import urlApi from 'urlApi'

export default function Game() {
  const [countryId, setCountryId] = useState<number | null>(null)
  const [competitionId, setCompetitionId] = useState<string | null>(null)
  const [seasonId, setSeasonId] = useState<string | null>(null)
  const [matchdayId, setMatchdayId] = useState<number | null>(null)

  const countries = useSWRImmutable<CountryType[]>(urlApi.country.list())
  const competitions = useSWRImmutable<CompetitionType[]>(
    countryId !== null ? urlApi.competition.list(countryId) : null
  )
  const seasons = useSWRImmutable<SeasonType[]>(
    competitionId ? urlApi.season.list(competitionId) : null
  )
  const matchdays = useSWRImmutable<MatchdayType[]>(
    competitionId && seasonId
      ? urlApi.matchday.list(competitionId, seasonId)
      : null
  )

  const responseCode = useSWR<string>(
    competitionId && seasonId && matchdayId
      ? urlApi.game.list(competitionId, seasonId, matchdayId)
      : null
  )

  function handleCountryIdChange(value: SelectValue) {
    setCompetitionId(null)
    setSeasonId(null)
    setCountryId(value as number)
  }

  function handleCompetitionIdChange(value: SelectValue) {
    setSeasonId(null)
    setCompetitionId(value as string)
  }

  function handleSeasonIdChange(value: SelectValue) {
    setMatchdayId(null)
    setSeasonId(value as string)
  }

  function handleMatchdayIdChange(value: SelectValue) {
    setMatchdayId(value as number)
  }

  const isShowResponse =
    !!countryId && !!competitionId && !!seasonId && !!matchdayId

  const usageCode = `
import { game } from "transfermarkt-parser"

await game.list(${[
    competitionId ? `"${competitionId}"` : null,
    seasonId ? `"${seasonId}"` : null,
    matchdayId,
  ]
    .filter((i) => !!i)
    .join(', ')})
  `.trim()

  return (
    <>
      <Head>
        <title>Game - Transfermarkt Parser</title>
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
              onChange={handleCountryIdChange}
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
              onChange={handleCompetitionIdChange}
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
              onChange={handleSeasonIdChange}
            >
              {seasons.data?.map((season) => (
                <Option key={season.id} value={season?.id ? season.id : ''}>
                  {season.title}
                </Option>
              )) || []}
            </Select>
          </div>
          <div className="mb-5">
            <Select
              disabled={responseCode.isLoading || !seasonId}
              isOptionsFetching={matchdays.isLoading}
              placeholder="Matchday..."
              value={matchdayId}
              onChange={handleMatchdayIdChange}
            >
              {matchdays.data?.map((matchday) => (
                <Option
                  key={matchday.id}
                  value={matchday?.id ? matchday.id : ''}
                >
                  {matchday.title}
                </Option>
              )) || []}
            </Select>
          </div>
        </form>
      </Page.Sidebar>
      <Page.Main>
        <CodeBlock code={usageCode} language="javascript" title="Usage" />
        {isShowResponse && (
          <div className="mt-6">
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
