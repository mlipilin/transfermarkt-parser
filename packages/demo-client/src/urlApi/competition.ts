export const list = (countryId: number) =>
  `${import.meta.env.VITE_API_HOST}/competition/list?countryId=${countryId}`
