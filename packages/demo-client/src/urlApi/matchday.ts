export const list = (competitionId: string, seasonId: string) =>
  `${
    import.meta.env.VITE_API_HOST
  }/matchday/list?competitionId=${competitionId}&seasonId=${seasonId}`
