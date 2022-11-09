export type Country = {
  flagUrl: string | null
  id: number | null
  title: string | null
}

export const createCountry = ({
  flagUrl = null,
  id = null,
  title = null,
}: Country): Country => ({
  flagUrl,
  id,
  title,
})
