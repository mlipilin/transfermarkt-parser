import { BASE_HOST } from '../settings';

export const list = (
    clubId: string,
    seasonId: string,
) => `${BASE_HOST}/xxx/startseite/verein/${clubId}/plus/?saison_id=${seasonId}`;
