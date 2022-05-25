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

const MOCK_NEWS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  description: mockData.text.description(index),
  image: mockData.image.cover(index),
  postedAt: mockData.time(index)
}));

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string
  })
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2} justify="space-between">
      <div style={{ width:'100%', display: 'inline-flex', justifyContent: 'space-between' }}>
      <Box component="img" src="https://avatars.githubusercontent.com/u/93196588?s=400&v=4" sx={{ width: 30, height: 30, borderRadius: 1.5 }} />
      <Box sx={{ minWidth: 240 }}>
        <Link component={RouterLink} to="#" color="inherit">
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" align="right" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
      </div>
    </Stack>
  );
}

export default function RecentCommits() {
  return (
    <Card>
      <CardHeader title="Recent Commits" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {MOCK_NEWS.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

    </Card>
  );
}
