export type Club = {
  id?: number
  logoUrl?: string
  title?: string
}

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

export type Game = {
  club1Goals?: number
  club2Goals?: number
  club1Id?: number
  club2Id?: number
  competitionId: string
  id?: string
  matchdayId: number
  seasonId: string
}

export type Matchday = {
  competitionId: string
  id?: number
  seasonId?: string
  title: string
}

export type Season = {
  competitionId: string
  id?: string
  title?: string
}
