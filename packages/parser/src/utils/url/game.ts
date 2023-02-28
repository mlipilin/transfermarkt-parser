import { BASE_HOST } from '../../constants/settings'

export const list = (
  competitionId: string,
  seasonId: string,
  matchdayId: number
) =>
  `${BASE_HOST}/xxx/spieltag/wettbewerb/${competitionId}/spieltag/${matchdayId}/saison_id/${seasonId}`
