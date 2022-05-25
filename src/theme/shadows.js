import { alpha } from '@mui/material/styles';
import palette from './palette';

const COLOR = palette.grey[400];

const createCustomShadow = (color) => {
  const transparent = alpha(color, 0.12);
  return {
    primary: `0 8px 16px 0 ${transparent}`,
  };
};

export const customShadows = createCustomShadow(COLOR);

