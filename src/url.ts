import { BASE_HOST } from './settings';

const countryList = () => `${BASE_HOST}/site/dropDownLaender`;
const competitionList = () => `${BASE_HOST}/site/DropDownWettbewerbe`;

export default {
    countryList,
    competitionList,
}
