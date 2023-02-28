import { BASE_HOST } from '../../constants/settings'

export const list = () => `${BASE_HOST}/site/DropDownWettbewerbe`

export const logo = (id) =>
  `https://tmssl.akamaized.net//images/logo/normal/${id.toLowerCase()}.png`
