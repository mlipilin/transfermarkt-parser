import { Link, useLocation } from 'react-router-dom'

// Components
import MenuItem from '../../components/MenuItem'
import Page from '../../components/Page'

const MENU_ITEMS = [
  { to: '/transfermarkt-parser/', name: 'Country' },
  { to: '/transfermarkt-parser/competition', name: 'Competition' },
  { to: '/transfermarkt-parser/season', name: 'Season' },
  { to: '/transfermarkt-parser/club', name: 'Club' },
  { to: '/transfermarkt-parser/player', name: 'Player' },
  { to: '/transfermarkt-parser/matchday', name: 'Matchday' },
  { to: '/transfermarkt-parser/game', name: 'Game' },
]

export default function Menu() {
  const location = useLocation()

  return (
    <Page.Menu>
      {MENU_ITEMS.map(({ name, to }) => (
        <Link key={to} to={to}>
          <MenuItem isActive={to === location.pathname}>{name}</MenuItem>
        </Link>
      ))}
    </Page.Menu>
  )
}
