import Link from 'next/link'
import { useRouter } from 'next/router'

// Components
import MenuItem from 'components/MenuItem'
import Page from 'components/Page'

const MENU_ITEMS = [
  { href: '/', name: 'Country' },
  { href: '/competition', name: 'Competition' },
  { href: '/season', name: 'Season' },
  { href: '/club', name: 'Club' },
  { href: '/player', name: 'Player' },
  { href: '/matchday', name: 'Matchday' },
  { href: '/game', name: 'Game' },
]

export default function Menu() {
  const router = useRouter()

  return (
    <Page.Menu>
      {MENU_ITEMS.map(({ href, name }) => (
        <Link key={href} href={href}>
          <MenuItem isActive={href === router.pathname}>{name}</MenuItem>
        </Link>
      ))}
    </Page.Menu>
  )
}
