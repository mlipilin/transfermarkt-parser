import { BASE_HOST } from './settings';

const competitionList = () => `${BASE_HOST}/site/DropDownWettbewerbe`;
const countryList = () => `${BASE_HOST}/site/dropDownLaender`;
const matchdayList = (
    competitionId: string,
    seasonId: string,
) => `${BASE_HOST}/xxx/gesamtspielplan/wettbewerb/${competitionId}?saison_id=${seasonId}`;
const seasonList = (
    competitionId: string,
) => `${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}`;

export default {
    competitionList,
    countryList,
    matchdayList,
    seasonList,
}
