import { FormEvent, useState } from 'react'

import useSWR from 'swr'

import Head from 'next/head'

// Components
import Button from 'components/Button'
import CodeBlock from 'components/CodeBlock'
import Option from 'components/Option'
import Select, { Value as SelectValue } from 'components/Select'
import Page from 'components/Page'

// Types
import { Country as CountryType } from 'transfermarkt-parser'

// Utils
import apiCall from 'utils/api-call'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Country() {
  const countries = useSWR<CountryType[]>('/api/country/list', fetcher)

  const [countryId, setCountryId] = useState<SelectValue>(null)
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false)
  const [responseCode, setResponseCode] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    apiCall(
      setIsFormSubmitting,
      `/api/competition/list?countryId=${countryId}`
    ).then((res) => {
      setResponseCode(JSON.stringify(res, null, 2))
    })
  }

  const isSubmitDisabled = countries.isLoading || !countryId

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
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Select
              placeholder="Country..."
              value={countryId}
              onChange={setCountryId}
            >
              {countries.data
                ? countries.data.map((country) => (
                    <Option
                      key={country.id}
                      value={country?.id ? country.id : ''}
                    >
                      {country.title}
                    </Option>
                  ))
                : []}
            </Select>
          </div>
          <Button
            block
            disabled={isSubmitDisabled}
            isLoading={isFormSubmitting}
            loadingText="Sending..."
            type="submit"
          >
            Send a request
          </Button>
        </form>
      </Page.Sidebar>
      <Page.Main>
        <CodeBlock code={usageCode} language="javascript" title="Usage" />
        {!isFormSubmitting && !!responseCode && (
          <div className="mt-4">
            <CodeBlock code={responseCode} language="json" title="Response" />
          </div>
        )}
      </Page.Main>
    </>
  )
}
