export const list = (
  competitionId: string,
  seasonId: string,
  matchdayId: number
) =>
  `/api/game/list?competitionId=${competitionId}&seasonId=${seasonId}&matchdayId=${matchdayId}`
