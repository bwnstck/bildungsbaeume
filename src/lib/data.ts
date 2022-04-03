/* eslint-disable @typescript-eslint/no-explicit-any */

export const generateDataMap = (data) => {
  const result: { [key: string]: any } = {}

  const directData = data[Object.keys(data)[0]]

  for (const entry of directData) {
    result[entry.slug] = entry
  }
  return result
}

export const getData = ({ data, slug }: { data: any; slug?: string }) => {
  if (slug) {
    return generateDataMap(data)[slug]
  }
  return generateDataMap(data)
}
