export interface Club {
    id: number;
    logoUrl: string;
    title: string;
}

export const createClub = ({ id = null, logoUrl = null, title = null }: Club): Club => ({
    id,
    logoUrl,
    title,
});
