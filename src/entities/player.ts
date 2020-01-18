export interface Player {
    birthday: string;
    id: number;
    name: string;
    nationalities: string[];
    number: number;
    photoUrl: string;
    position: string;
}

export const createPlayer = ({
    birthday = null,
    id = null,
    name = null,
    nationalities = [],
    number = null,
    photoUrl = null,
    position = null,
}: Player): Player => ({
    birthday,
    id,
    name,
    nationalities,
    number,
    photoUrl,
    position,
});
