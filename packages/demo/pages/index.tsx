import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco as highlighterStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

// Components
import Button from 'components/Button'

const requestData = `
import { game } from "transfermarkt-parser"

const games = await game.list("GB1", "2019", 3)
`.trim()

const responseData = `
[
  {
    "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/1.png",
    "id": 1,
    "title": "Afghanistan"
  },
  {
    "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/3.png",
    "id": 3,
    "title": "Albania"
  },
  {
    "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/4.png",
    "id": 4,
    "title": "Algeria"
  },
  {
    "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/239.png",
    "id": 239,
    "title": "American Samoa"
  },
  {
    "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/234.png",
    "id": 234,
    "title": "American Virgin Islands"
  },
  {
    "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/5.png",
    "id": 5,
    "title": "Andorra"
  }
]
`.trim()

export default function Home() {
  return (
    <div className="flex w-screen justify-center bg-gray-200">
      <div className="w-container border-primary border-t-4 bg-white px-8 pt-14 pb-8">
        {/* Title */}
        <h1 className="text-primary text-3xl">
          Transfermarkt Parser
          <span className="font-extralight ml-2 opacity-60">Playground</span>
        </h1>
        {/* /Title */}
        {/* Entities */}
        <nav className="mt-8 flex gap-x-2.5">
          <a
            href="/country"
            className="bg-primary-lightest hover:bg-primary-light active:bg-primary px-5 py-2 text-white"
          >
            Country
          </a>
          <a
            href="/competition"
            className="bg-primary-lightest hover:bg-primary-light active:bg-primary px-5 py-2 text-white"
          >
            Competition
          </a>
          <a
            href="/season"
            className="bg-primary-lightest hover:bg-primary-light active:bg-primary px-5 py-2 text-white"
          >
            Season
          </a>
          <a
            href="/club"
            className="bg-primary-lightest hover:bg-primary-light active:bg-primary px-5 py-2 text-white"
          >
            Club
          </a>
          <a
            href="/player"
            className="bg-primary-lightest hover:bg-primary-light active:bg-primary px-5 py-2 text-white"
          >
            Player
          </a>
          <a
            href="/matchday"
            className="bg-primary-lightest hover:bg-primary-light active:bg-primary px-5 py-2 text-white"
          >
            Matchday
          </a>
          <a href="/game" className="bg-primary px-5 py-2 text-white">
            Game
          </a>
        </nav>
        {/* /Entities */}
        <div className="mt-8 flex gap-x-8">
          {/* Filters */}
          <aside>
            <form className="w-80">
              <label className="mb-5 block">
                <input
                  className="block h-10 w-full border border-gray-300 px-5 focus:border-gray-400 focus:outline-none"
                  type="text"
                  placeholder="Country..."
                />
              </label>
              <label className="mb-5 block">
                <input
                  className="block h-10 w-full border border-gray-300 px-5 focus:border-gray-400 focus:outline-none"
                  type="text"
                  placeholder="Competition..."
                />
              </label>
              <label className="mb-5 block">
                <input
                  className="block h-10 w-full border border-gray-300 px-5 focus:border-gray-400 focus:outline-none"
                  type="text"
                  placeholder="Season..."
                />
              </label>
              <label className="mb-5 block">
                <input
                  className="block h-10 w-full border border-gray-300 px-5 focus:border-gray-400 focus:outline-none"
                  type="text"
                  placeholder="Matchday..."
                />
              </label>
              <Button block type="submit">
                Send
              </Button>
            </form>
          </aside>
          {/* /Filters */}
          <main className="w-main max-w-main flex-auto">
            {/* Request */}
            <div>
              <h2 className="mb-4 text-xl">Usage</h2>
              <div className="overflow-auto">
                <SyntaxHighlighter
                  language="javascript"
                  style={highlighterStyle}
                >
                  {requestData}
                </SyntaxHighlighter>
              </div>
            </div>
            {/* /Request */}
            {/* Response */}
            <div className="mt-8">
              <h2 className="mb-4 text-xl">Response</h2>
              <div className="overflow-auto">
                <SyntaxHighlighter language="json" style={highlighterStyle}>
                  {responseData}
                </SyntaxHighlighter>
              </div>
            </div>
            {/* /Response */}
          </main>
        </div>
      </div>
    </div>
  )
}
