export interface Matchday {
    competitionId: string;
    id: number;
    seasonId: string;
    title: string;
}

export const createMatchday = ({
    competitionId = null,
    id = null,
    seasonId = null,
    title = null,
}: Matchday): Matchday => ({
    competitionId,
    id,
    seasonId,
    title,
});
