export interface Game {
    club1Goals: number;
    club2Goals: number;
    club1Id: number;
    club2Id: number;
    competitionId: string;
    id: string;
    matchday: number;
    seasonId: string;
}

export const createGame = ({
    club1Goals = null,
    club2Goals = null,
    club1Id = null,
    club2Id = null,
    competitionId = null,
    id = null,
    matchday = null,
    seasonId = null,
}: Game): Game => ({
    club1Goals,
    club2Goals,
    club1Id,
    club2Id,
    competitionId,
    id,
    matchday,
    seasonId,
});
