import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fToNow } from '../utils/format';
import { Box, Stack, Card, Typography, CardHeader } from '@mui/material';
import { Client } from '../utils/client';

const client = new Client();

CommitItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string
  })
};


function CommitItem({ item }) {
  const { dev_name, repo, organisation, commit_hash, commit_date, avatar_url, message } = item;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" src={avatar_url} sx={{ width: 30, height: 30, borderRadius: 1.5 }} />
            <Box sx={{ minWidth: 240 }}>
               <Typography variant="body2" sx={{ color: 'text.primary' }} noWrap>
                  {message}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} justify="space-between">
                  
                  <Typography variant="subtitle2" noWrap>
                    <a target="_blank" href={"https://github.com/" + dev_name}>{dev_name}</a>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    .
                  </Typography>
                    <Typography variant="subtitle2" noWrap>
                      <a target="_blank" href={"https://github.com/" + organisation + "/" + repo}>{organisation}/{repo}</a>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    .
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                      <a target="_blank" href={"https://github.com/" + organisation + "/" + repo + "/commit/" + commit_hash}>{commit_hash?.substring(0,7)}</a>
                    </Typography>
                </Stack>
              </Box>
              <Box flexGrow={2}></Box>
            <Typography variant="caption" align="right" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary'}}>
              {fToNow(commit_date)}
            </Typography>
    </Stack>
  );
}

export default function RecentCommits() {
  const [state, setState] = useState({
    loading: true, recent_commits: []
  });

  useEffect(() => {
    client.get('recent_commits').then((recent_commits) => {
      setState({
        loading: false, 
        recent_commits: recent_commits,
      });
    });
  }, [setState]);

  return (
    <Card>
      <CardHeader title="Recent Commits" />
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {state.recent_commits.map((item) => (
            <CommitItem item={item} />
          ))}
        </Stack>
    </Card>

  );
}
