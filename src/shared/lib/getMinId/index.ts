export function getMinId(ids: number[]): number | null {
  if (ids.length === 0) return null
  return ids.reduce((prevId, id) => id < prevId ? id : prevId, Infinity)
}