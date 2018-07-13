import { BASE_HOST } from './settings';

const competitionList = () => `${BASE_HOST}/site/DropDownWettbewerbe`;
const countryList = () => `${BASE_HOST}/site/dropDownLaender`;
const seasonList = competitionId => `${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}`;

export default {
    competitionList,
    countryList,
    seasonList,
}
