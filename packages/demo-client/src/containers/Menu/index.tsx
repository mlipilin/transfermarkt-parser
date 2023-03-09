import { Link, useLocation } from 'react-router-dom'

// Components
import MenuItem from '../../components/MenuItem'
import Page from '../../components/Page'

const MENU_ITEMS = [
  { to: '/', name: 'Country' },
  { to: '/competition', name: 'Competition' },
  { to: '/season', name: 'Season' },
  { to: '/club', name: 'Club' },
  { to: '/player', name: 'Player' },
  { to: '/matchday', name: 'Matchday' },
  { to: '/game', name: 'Game' },
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
