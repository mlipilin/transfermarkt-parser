type SetIsLoading = (isLoading: boolean) => void

export default function apiCall<Response = object>(
  setIsLoading: SetIsLoading,
  url: string,
  init?: any
) {
  return new Promise((resolve, reject) => {
    setIsLoading(true)
    setTimeout(() => {
      fetch(url, init)
        .then((res) => res.json() as Response)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          setIsLoading(false)
        })
    }, 500)
  })
}
