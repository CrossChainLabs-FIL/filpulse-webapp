import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography } from '@mui/material';
import palette from '../theme/palette';

CardWidget.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const RootStyle = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: palette.card,
}));

export default function CardWidget({ name, value }) {
  const theme = useTheme();

  return (
    <RootStyle>
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography align="center" variant="h3">{value}</Typography>
        <Typography align="center" variant="h6">{name}</Typography>
      </Box>
    </Card>
    </RootStyle>
  );
}
