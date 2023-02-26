import { BASE_HOST } from '../../constants/settings'

export const list = (competitionId: string, seasonId: string) =>
  `${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}/plus/?saison_id=${seasonId}`

export const logo = (id: number) =>
  `https://tmssl.akamaized.net//images/wappen/head/${id}.png`
