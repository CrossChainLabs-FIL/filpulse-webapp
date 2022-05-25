export function pixelToRem(value) {
  return `${value / 16}rem`;
}

export function fontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pixelToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pixelToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pixelToRem(lg),
    },
  };
}
