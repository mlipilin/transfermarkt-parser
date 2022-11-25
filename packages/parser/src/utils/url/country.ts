import { BASE_HOST } from '../../constants/settings'

export const flag = (id: number) =>
  `https://tmssl.akamaized.net//images/flagge/small/${id}.png`

export const list = () => `${BASE_HOST}/site/dropDownLaender`
