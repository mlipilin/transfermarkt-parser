export function highlight(
  str: string,
  query: string,
  wrapTag: string = 'em'
): string {
  if (typeof str !== 'string') {
    return str
  }
  if (typeof query !== 'string') {
    return str
  }

  return query
    ? str.replace(new RegExp(`(${query})`, 'ig'), `<${wrapTag}>$1</${wrapTag}>`)
    : str
}
