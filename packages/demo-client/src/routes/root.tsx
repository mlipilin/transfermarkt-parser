import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Layout from '../components/layout'

const TITLE = {
  '/': 'Country',
  '/competition': 'Competition',
  '/club': 'Club',
  '/game': 'Game',
  '/matchday': 'Matchday',
  '/player': 'Player',
  '/season': 'Season',
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
