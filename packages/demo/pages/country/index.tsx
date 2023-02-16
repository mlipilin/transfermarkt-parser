import { FormEvent, useState } from 'react'

import Head from 'next/head'

// Components
import Button from 'components/Button'
import CodeBlock from 'components/CodeBlock'
// import Input from 'components/Input'
import Page from 'components/Page'

// Utils
import apiCall from 'utils/api-call'

const USAGE_CODE = `
import { country } from "transfermarkt-parser"

await country.list()
`.trim()

export default function Country() {
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false)
  const [responseCode, setResponseCode] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    apiCall(setIsFormSubmitting, '/api/country/list').then((res) => {
      console.log('res', res)
      setResponseCode(JSON.stringify(res, null, 2))
    })
  }

  return (
    <>
      <Head>
        <title>Country - Transfermarkt Parser</title>
      </Head>
      <Page.Sidebar>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-5">
            <Input type="text" placeholder="Country..." />
          </div>
          <div className="mb-5">
            <Input type="text" placeholder="Competition..." />
          </div>
          <div className="mb-5">
            <Input type="text" placeholder="Season..." />
          </div>
          <div className="mb-5">
            <Input type="text" placeholder="Matchday..." />
          </div> */}
          <Button
            block
            isLoading={isFormSubmitting}
            loadingText="Sending..."
            type="submit"
          >
            Send a request
          </Button>
        </form>
      </Page.Sidebar>
      <Page.Main>
        <CodeBlock code={USAGE_CODE} language="javascript" title="Usage" />
        {!isFormSubmitting && !!responseCode && (
          <div className="mt-4">
            <CodeBlock code={responseCode} language="json" title="Response" />
          </div>
        )}
      </Page.Main>
    </>
  )
}
