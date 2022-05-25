import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { PADDING } from '../../config';
 import DashboardHeader from './header';

const RootStyle = styled('div')(() => ({
    display: 'flex',
    minHeight: '100%',
  
}));

const MainStyle = styled('main')(() => ({
  flexGrow: 1,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: PADDING,
  paddingBottom: PADDING,
  width: `calc(100%px)`,
}));

export default function DashboardLayout() {
  return (
    <RootStyle>
      { <DashboardHeader/> }
      <MainStyle >
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
