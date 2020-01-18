export interface Club {
    id: number;
    logoUrl: string;
    title: string;
}

export interface Competition {
    countryId: number;
    id: string;
    logoUrl: string;
    title: string;
}

export interface Country {
    flagUrl: string;
    id: number;
    title: string;
}

export interface Matchday {
    competitionId: string;
    id: number;
    seasonId: string;
    title: string;
}

export interface Player {
    birthday: string;
    id: number;
    logoUrl: string;
    name: string;
    nationalities: string[];
    number: number;
    position: string;
}

export interface Season {
    competitionId: string;
    id: string;
    title: string;
}
