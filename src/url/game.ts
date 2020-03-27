import { BASE_HOST } from '../settings';

export const list = (competitionId: string, seasonId: string, matchday: number) =>
    `${BASE_HOST}/xxx/spieltag/wettbewerb/${competitionId}/spieltag/${matchday}/saison_id/${seasonId}`;
