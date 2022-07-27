import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import Page from '../components/Page';
import { Footer } from '../components/Footer';

import { 
  RecentCommits, 
  Commits, 
  CardWidget, 
  TopContributors,
  Issues,
  ActiveContributors,
} from '../sections';

export default function Dashboard() {
  const theme = useTheme();
  const  themeStretch  = false;

  return (
    <Page title="FilPulse">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <CardWidget
              name='Commits'
              value='714000'
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <CardWidget
              name='Repositories'
              value='1413'
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <CardWidget
              name='Contributors'
              value='512'
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardWidget
              name='PRs'
              value='23234'
            />
          </Grid>

          <Grid item xs={12} md={3} lg={4}>
            <TopContributors />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Commits />
          </Grid>

          <Grid item xs={12} md={3} lg={4}>
            <Issues />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ActiveContributors />
          </Grid>

          <Grid item xs={12} lg={12}>
            <RecentCommits />
          </Grid>

        </Grid>
        
      </Container>
      <Footer />
    </Page>
  );
}
