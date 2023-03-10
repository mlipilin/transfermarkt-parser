import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { SWRConfig } from 'swr'

import Route404 from './routes/404'
import RouteClub from './routes/club'
import RouteCompetition from './routes/competition'
import RouteCountry from './routes/country'
import RouteGame from './routes/game'
import RouteMatchday from './routes/matchday'
import RoutePlayer from './routes/player'
import RouteSeason from './routes/season'
import RouteRoot from './routes/root'

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json())

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Route404 />}>
      <Route path="transfermarkt-parser" element={<RouteRoot />}>
        <Route index element={<RouteCountry />} />
        <Route path="club" element={<RouteClub />} />
        <Route path="competition" element={<RouteCompetition />} />
        <Route path="game" element={<RouteGame />} />
        <Route path="matchday" element={<RouteMatchday />} />
        <Route path="player" element={<RoutePlayer />} />
        <Route path="season" element={<RouteSeason />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <RouterProvider router={router} />
    </SWRConfig>
  )
}

export default App
