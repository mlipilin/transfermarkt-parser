import { BASE_HOST } from '../../constants/settings'

export const list = (competitionId: string, seasonId: string) =>
  `${BASE_HOST}/xxx/gesamtspielplan/wettbewerb/${competitionId}?saison_id=${seasonId}`
