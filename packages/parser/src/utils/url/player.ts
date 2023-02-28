import { BASE_HOST } from '../../constants/settings'

export const list = (clubId: number, seasonId: string) =>
  `${BASE_HOST}/xxx/startseite/verein/${clubId}/plus/?saison_id=${seasonId}`
