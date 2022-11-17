// Components
import Button from 'components/Button'
import CodeBlock from 'components/CodeBlock'
import Input from 'components/Input'
import MenuItem from 'components/MenuItem'
import Title from 'components/Title'

// Layout
import Container from 'layout/Container'
import Content from 'layout/Content'
import Main from 'layout/Main'
import Menu from 'layout/Menu'
import Page from 'layout/Page'
import Sidebar from 'layout/Sidebar'

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
    <Page>
      <Container>
        <Title />
        <Menu>
          <MenuItem href="/country">Country</MenuItem>
          <MenuItem href="/competition">Competition</MenuItem>
          <MenuItem href="/season">Season</MenuItem>
          <MenuItem href="/club">Club</MenuItem>
          <MenuItem href="/player">Player</MenuItem>
          <MenuItem href="/matchday">Matchday</MenuItem>
          <MenuItem href="/game" isActive>
            Game
          </MenuItem>
        </Menu>
        <Content>
          <Sidebar>
            <form>
              <Input type="text" placeholder="Country..." />
              <Input type="text" placeholder="Competition..." />
              <Input type="text" placeholder="Season..." />
              <Input type="text" placeholder="Matchday..." />
              <Button block type="submit">
                Send
              </Button>
            </form>
          </Sidebar>
          <Main>
            <CodeBlock code={requestData} language="javascript" title="Usage" />
            <br />
            <CodeBlock code={responseData} language="json" title="Response" />
          </Main>
        </Content>
      </Container>
    </Page>
  )
}
