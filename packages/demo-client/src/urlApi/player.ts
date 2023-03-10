export const list = (clubId: number, seasonId: string) =>
  `${
    import.meta.env.VITE_API_HOST
  }/player/list?clubId=${clubId}&seasonId=${seasonId}`
