export const list = (
  competitionId: string,
  seasonId: string,
  matchdayId: number
) =>
  `${
    import.meta.env.VITE_API_HOST
  }/game/list?competitionId=${competitionId}&seasonId=${seasonId}&matchdayId=${matchdayId}`
