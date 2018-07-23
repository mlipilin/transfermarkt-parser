import { BASE_HOST } from './settings';

const clubList = (
    competitionId: string,
    seasonId: string,
) => `${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}/plus/?saison_id=${seasonId}`;

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
    clubList,
    competitionList,
    countryList,
    matchdayList,
    seasonList,
}
