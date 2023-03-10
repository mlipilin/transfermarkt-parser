export const list = (competitionId: string) =>
  `${import.meta.env.VITE_API_HOST}/season/list?competitionId=${competitionId}`
