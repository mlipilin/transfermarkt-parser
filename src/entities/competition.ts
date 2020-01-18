export interface Competition {
    countryId: number;
    id: string;
    logoUrl: string;
    title: string;
}

export const createCompetition = ({
    countryId = null,
    id = null,
    logoUrl = null,
    title = null,
}: Competition): Competition => ({
    countryId,
    id,
    logoUrl,
    title,
});
