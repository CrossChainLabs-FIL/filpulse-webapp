import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { fToNow } from '../utils/format';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader, Grid } from '@mui/material';
// utils

import mockData from './mock-data';
//
import Scrollbar from '../components/Scrollbar';

// ----------------------------------------------------------------------

const MOCK_DATA = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  description: mockData.text.description(index),
  image: mockData.image.cover(index),
  postedAt: mockData.time(index)
}));

// ----------------------------------------------------------------------

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
  const { image, title, description, postedAt } = item;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" src="https://avatars.githubusercontent.com/u/93196588?s=400&v=4" sx={{ width: 30, height: 30, borderRadius: 1.5 }} />
            <Box sx={{ minWidth: 240 }}>
               <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                  {description}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} justify="space-between">
                  <Link component={RouterLink} to="#" color="inherit">
                    <Typography variant="subtitle2" noWrap>
                      {title}
                    </Typography>
                  </Link>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    .
                  </Typography>
                  <Link component={RouterLink} to="#" color="inherit">
                    <Typography variant="subtitle2" noWrap>
                      filecoin-project/lotus
                    </Typography>
                  </Link>
                </Stack>
              </Box>
              <Box flexGrow={2}></Box>
            <Typography variant="caption" align="right" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary'}}>
              {fToNow(postedAt)}
            </Typography>
    </Stack>
  );
}

export default function RecentCommits() {
  return (
    <Card>
      <CardHeader title="Recent Commits" />

        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {MOCK_DATA.map((item) => (
            <CommitItem key={item.id} item={item} />
          ))}
        </Stack>


    </Card>
  );
}
