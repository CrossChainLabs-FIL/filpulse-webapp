import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import Page from '../components/Page';
import { Footer } from '../components/Footer';
import { Client } from '../utils/client';

import { 
  RecentCommits, 
  Commits, 
  CardWidget, 
  TopContributors,
  Issues,
  ActiveContributors,
} from '../sections';

const client = new Client();

export default function Dashboard() {
  const theme = useTheme();
  const  themeStretch  = false;

  const [state, setState] = useState({ loading: true, commits: '', repositories: '', contributors: '', prs: '' });
  useEffect(() => {
    setState({ loading: true });

    client.get('overview').then((overview) => {
      setState({
        loading: false,
        commits: overview.commits,
        repositories: overview.repos,
        contributors: overview.contributors,
        prs: overview.prs,
      })
      
    });
  }, [setState]);

  return (
    <Page title="FilPulse">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <CardWidget
              name='Commits'
              value={((state.commits) ? (state.commits) : 'N/A')}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <CardWidget
              name='Repositories'
              value={((state.repositories) ? (state.repositories) : 'N/A')}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <CardWidget
              name='Contributors'
              value={((state.contributors) ? (state.contributors) : 'N/A')}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardWidget
              name='PRs'
              value={((state.prs) ? (state.prs) : 'N/A')}
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
