import { pixelToRem, fontSizes } from '../utils/font';
const FONT_PRIMARY = 'Public Sans, sans-serif'; 

const typography = {
  fontFamily: FONT_PRIMARY,
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pixelToRem(24),
    ...fontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pixelToRem(17),
    ...fontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pixelToRem(14),
  },
  body: {
    lineHeight: 22 / 14,
    fontSize: pixelToRem(14),
  },
};

export default typography;
