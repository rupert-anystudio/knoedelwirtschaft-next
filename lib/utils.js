export function getTheme(restaurant = {}) {
  return {
    txt: restaurant?.color_txt || '#000000',
    bg: restaurant?.color_bg || '#ffffff',
  }
}

export function parseNumber(value) {
  if (!value) return null
  return parseFloat(value.replace(',', '.'))
}