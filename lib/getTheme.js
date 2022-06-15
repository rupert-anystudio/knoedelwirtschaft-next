function getTheme(restaurant = {}) {
  const {
    color_txt = '#000000',
    color_bg = '#ffffff',
  } = restaurant
  return {
    txt: color_txt,
    bg: color_bg,
  }
}

export default getTheme