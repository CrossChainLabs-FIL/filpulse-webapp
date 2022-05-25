import { alpha, styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const HEIGHT = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  backgroundColor: alpha(theme.palette.background, 0.72),
  width: `calc(100%}px)`
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: HEIGHT,
    padding: theme.spacing(0, 5)
}));

export default function DashboardNavbar() {
  return (
    <RootStyle>
      <ToolbarStyle>
        <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6">
            FilPulse
          </Typography>
      </ToolbarStyle>
    </RootStyle>
  );
}
