export interface Country {
    flagUrl: string;
    id: number;
    title: string;
}

export const createCountry = ({ flagUrl = null, id = null, title = null }: Country): Country => ({
    flagUrl,
    id,
    title,
});
