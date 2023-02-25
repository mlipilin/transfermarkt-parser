export type Competition = {
  countryId: number
  id?: string
  logoUrl?: string
  title?: string
}

export type Country = {
  flagUrl?: string
  id?: number
  title?: string
}

export type Season = {
  competitionId: string
  id?: string
  title?: string
}
