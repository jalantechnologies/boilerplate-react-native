const NAMED_COLORS = {
  // grayscale (light to dark)
  white: "rgba(255, 255, 255, 1)",
  whitetransparent: "rgba(255, 255, 255, .5)",
  bianca: "rgba(251, 249, 240, 1)",
  timberwolf: "rgba(218, 216, 210, 1)",
  gray: "rgba(128,128,128,1)",
  silver: "rgba(192,192,192,1)",
  magnesium: "rgba(178, 178, 178, 1)",
  black: "rgba(3, 3, 3, 1)",

  // the rest
  yellow: "rgba(246, 253, 55, 1)",
  green: "rgba(106, 246, 162, 1)",
  turquoise: "rgba(0, 205, 223, 1)",
  purple: "rgba(144, 63, 199, 1)",
  pink: "rgba(245, 64, 199, 1)",
  darkPink: "rgba(200, 40, 159, 1)",
  orange: "rgba(247, 144, 77, 1)",
  salmon: "rgba(243, 91, 89, 1)"
};

const THEME_COLORS = {
  // alias the named colors by use-case
  actionText: NAMED_COLORS.black,
  lightBackground: NAMED_COLORS.white,
  darkBackground: NAMED_COLORS.salmon,
  lightText: NAMED_COLORS.gray,
  iconBackground: NAMED_COLORS.white,
  actionButton: NAMED_COLORS.pink,
  errorText: NAMED_COLORS.orange,
  overlay: NAMED_COLORS.whitetransparent
};

export { NAMED_COLORS, THEME_COLORS };
