import { useState } from 'react'

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

// Components
import CodeBlock from '../components/CodeBlock'
import Option from '../components/Option'
import Select, { Value as SelectValue } from '../components/Select'
import Page from '../components/Page'

// Types
// import {
//   Club as ClubType,
//   Country as CountryType,
//   Competition as CompetitionType,
//   Season as SeasonType,
// } from 'transfermarkt-parser'
import {
  Club as ClubType,
  Country as CountryType,
  Competition as CompetitionType,
  Season as SeasonType,
} from '../types'

// URL API
import urlApi from '../urlApi'

export default function RoutePlayer() {
  const [countryId, setCountryId] = useState<number | null>(null)
  const [competitionId, setCompetitionId] = useState<string | null>(null)
  const [seasonId, setSeasonId] = useState<string | null>(null)
  const [clubId, setClubId] = useState<number | null>(null)

  const countries = useSWRImmutable<CountryType[]>(urlApi.country.list())
  const competitions = useSWRImmutable<CompetitionType[]>(
    countryId !== null ? urlApi.competition.list(countryId) : null
  )
  const seasons = useSWRImmutable<SeasonType[]>(
    competitionId ? urlApi.season.list(competitionId) : null
  )
  const clubs = useSWRImmutable<ClubType[]>(
    competitionId && seasonId ? urlApi.club.list(competitionId, seasonId) : null
  )

  const responseCode = useSWR<string>(
    competitionId && seasonId && clubId
      ? urlApi.player.list(clubId, seasonId)
      : null
  )

  function handleCountryIdChange(value: SelectValue) {
    setCompetitionId(null)
    setSeasonId(null)
    setClubId(null)
    setCountryId(value as number)
  }

  function handleCompetitionIdChange(value: SelectValue) {
    setSeasonId(null)
    setClubId(null)
    setCompetitionId(value as string)
  }

  function handleSeasonIdChange(value: SelectValue) {
    setClubId(null)
    setSeasonId(value as string)
  }

  function handleClubIdChange(value: SelectValue) {
    setClubId(value as number)
  }

  const isShowResponse =
    !!countryId && !!competitionId && !!seasonId && !!clubId

  const usageCode = `
import { player } from "transfermarkt-parser"

await player.list(${[clubId, seasonId ? `"${seasonId}"` : null]
    .filter((i) => !!i)
    .join(', ')})
  `.trim()

  return (
    <>
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
              isOptionsFetching={clubs.isLoading}
              placeholder="Club..."
              value={clubId}
              onChange={handleClubIdChange}
            >
              {clubs.data?.map((club) => (
                <Option key={club.id} value={club?.id ? club.id : ''}>
                  {club.title}
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
