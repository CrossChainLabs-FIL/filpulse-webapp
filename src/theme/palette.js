import { alpha } from '@mui/material/styles';

const PRIMARY = { lighter: '#C8FACD', light: '#5BE584', main: '#00AB55', dark: '#007B55', darker: '#005249' };
const SUCCESS = { lighter: '#E9FCD4', light: '#AAF27F', main: '#54D62C', dark: '#229A16', darker: '#08660D' };
const ERROR =   { lighter: '#FFE7D9', light: '#FFA48D', main: '#FF4842', dark: '#B72136', darker: '#7A0C2E' };

const CARD_WIDGET_BG = '#EEF4F5';

const GREY_200 = '#F4F6F8';
const GREY_400 = '#C4CDD5';
const GREY_500 = '#919EAB';
const GREY_600 = '#637381';
const GREY_800 = '#212B36';

const GREY = {
  200: GREY_200,
  400: GREY_400,
  500: GREY_500,
  600: GREY_600,
  800: GREY_800,
  500_8:  alpha(GREY_500, 0.08),
  500_16: alpha(GREY_500, 0.16),
  500_24: alpha(GREY_500, 0.24),
  500_80: alpha(GREY_500, 0.8),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  chart: CHART_COLORS,
  card: CARD_WIDGET_BG,
};

const palette = {
  ...COMMON,
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: '#fff',
  action: { active: GREY[600], hover: GREY[500_8], selected: GREY[500_16] },
};

export default palette;
