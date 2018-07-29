import { BASE_HOST } from '../settings';

export const list = (
    competitionId: string,
    seasonId: string,
) => `${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}/plus/?saison_id=${seasonId}`;
