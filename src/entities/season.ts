export interface Season {
    competitionId: string;
    id: string;
    title: string;
}

export const createSeason = ({
    competitionId = null,
    id = null,
    title = null,
}: Season): Season => ({
    competitionId,
    id,
    title,
});
