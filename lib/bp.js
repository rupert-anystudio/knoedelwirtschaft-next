const breakpoints = {
  tabletPortrait: 760,
  tabletLandscape: 1014,
  macbook13: 1260,
  macbook16: 1430,
  desktop:  1670,
}

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/

export const returnMinWidhts = bps => Object.keys(bps).reduce((acc, key) => {
  const bp = bps[key]
  if (!bp) return acc
  return {
    ...acc,
    [key]: `(min-width: ${bp / 16}em)`
  }
}, {})

export const returnMaxWidths = bps => Object.keys(bps).reduce((acc, key) => {
  const bp = bps[key]
  if (!bp) return acc
  return {
    ...acc,
    [key]: `(max-width: ${(bp - 1) / 16}em)`
  }
}, {})

export const minWidths = returnMinWidhts(breakpoints)
export const maxWidths = returnMaxWidths(breakpoints)

const returnMediaQueries = (obj) => Object.keys(obj).reduce((acc, key) => {
  const rule = obj[key]
  if (!rule) return acc
  return {
    ...acc,
    [key]: `@media ${rule}`
  }
}, {})

export const min = returnMediaQueries(minWidths)
export const max = returnMediaQueries(maxWidths)