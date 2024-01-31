const palette = {
  //primary colour, CTA, Focused , Active
  blue: "#2A4BA0",
  deepBlue: "#153075",
  //Secondary , highlights, callouts
  darkYellow: "#F9B023",
  yellow: "#FFC83A",
  cardYellow: "#FFBC6E",

  // blacks, text, background , borders
  black100: "#1B262E",
  black90: "#354349",
  black60: "#606D76",
  black45: "#A9B4BC",
  black20: "#C5CDD2",
  black10: "#E7ECF0",
  black1: "#F8F9FB",
  white: "#F8F7FB",
};
const font = {
  regular: "manrope-regular",
  medium: "manrope-medium",
  semiBold: "manrope-semibold",
  bold: "manrope-bold",
};

const fontSize = {
  xxs: 12,
  xs: 14,
  s: 16,
  m: 18,
  l: 20,
  xl: 26,
  xxl: 30,
};

export const theme = {
  colors: {
    background: palette.white,
    primary: palette.blue,
    primaryDark: palette.deepBlue,
    secondary: palette.yellow,
    secondaryDark: palette.darkYellow,
    cardYellow: palette.cardYellow,
    black100: palette.black100,
    black90: palette.black90,
    black60: palette.black60,
    black45: palette.black45,
    black20: palette.black20,
    black10: palette.black10,
    black1: palette.black1,
  },
  // spacing: {
  //   s: 8,
  //   m: 16,
  //   l: 24,
  //   xl: 40,
  // },
  textVariants: {
    regular: font.regular,
    medium: font.medium,
    semiBold: font.semiBold,
    bold: font.bold,
    xxs: fontSize.xxs,
    xs: fontSize.xs,
    s: fontSize.s,
    m: fontSize.m,
    l: fontSize.l,
    xl: fontSize.xl,
    xxl: fontSize.xxl,
  },
};
