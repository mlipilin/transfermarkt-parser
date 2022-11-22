import { FormEvent, useState } from 'react'

import Head from 'next/head'

// Components
import Button from 'components/Button'
import CodeBlock from 'components/CodeBlock'
// import Input from 'components/Input'
import Page from 'components/Page'

const USAGE_CODE = `
import { game } from "transfermarkt-parser"

const games = await game.list("GB1", "2019", 3)
`.trim()

export default function Country() {
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false)
  const [responseCode] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsFormSubmitting(true)
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
        <br />
        {!!responseCode && (
          <CodeBlock code={responseCode} language="json" title="Response" />
        )}
      </Page.Main>
    </>
  )
}
