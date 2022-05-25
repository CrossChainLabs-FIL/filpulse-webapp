import { alpha } from '@mui/material/styles';

export default function Card(theme) {
  const boxShadow = `0 0 2px 0 ${alpha( theme.palette.grey[400], 0.3)}, ${ theme.customShadows.primary}`;

  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow,
          position: 'relative',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0,
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body', marginTop: theme.spacing(0.5) },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
