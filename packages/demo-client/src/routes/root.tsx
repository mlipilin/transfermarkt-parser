import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Layout from '../components/layout'

const TITLE = {
  '/transfermarkt-parser/': 'Country',
  '/transfermarkt-parser/competition': 'Competition',
  '/transfermarkt-parser/club': 'Club',
  '/transfermarkt-parser/game': 'Game',
  '/transfermarkt-parser/matchday': 'Matchday',
  '/transfermarkt-parser/player': 'Player',
  '/transfermarkt-parser/season': 'Season',
}

export default function RouteRoot() {
  const location = useLocation()

  useEffect(() => {
    // @ts-ignore
    document.title = `${TITLE[location.pathname] || ''} - Transfermarkt Parser`
  }, [location.pathname])

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
