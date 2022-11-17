import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco as highlighterStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

// Components
import Button from 'components/Button'
import Input from 'components/Input'
import MenuItem from 'components/MenuItem'
import Subtitle from 'components/Subtitle'
import Title from 'components/Title'

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
        <Title />
        <nav className="mt-8 flex gap-x-2.5">
          <MenuItem href="/country">Country</MenuItem>
          <MenuItem href="/competition">Competition</MenuItem>
          <MenuItem href="/season">Season</MenuItem>
          <MenuItem href="/club">Club</MenuItem>
          <MenuItem href="/player">Player</MenuItem>
          <MenuItem href="/matchday">Matchday</MenuItem>
          <MenuItem href="/game" isActive>
            Game
          </MenuItem>
        </nav>
        <div className="mt-8 flex gap-x-8">
          <aside>
            <form className="w-80">
              <Input type="text" placeholder="Country..." />
              <Input type="text" placeholder="Competition..." />
              <Input type="text" placeholder="Season..." />
              <Input type="text" placeholder="Matchday..." />
              <Button block type="submit">
                Send
              </Button>
            </form>
          </aside>
          <main className="w-main max-w-main flex-auto">
            {/* Request */}
            <div>
              <Subtitle>Usage</Subtitle>
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
              <Subtitle>Response</Subtitle>
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
