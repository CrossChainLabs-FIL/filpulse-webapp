import merge from 'lodash/merge';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { CustomChart } from '../components/chart';
import { Client } from '../utils/client';

const client = new Client();

export default function ActiveContributors() {
  const [state, setState] = useState({
    loading: true, data: [
      { name: 'Contributors', data: [] }
    ]
  });

  useEffect(() => {
    client.get('active_contributors').then((contributors) => {
      contributors.pop();

      if (contributors.length > 12) {
        //remove first length - 12 elements
        contributors.splice(0, contributors.length - 12);
      }
      let contributorsData = [];
      let categories = [];

        contributors.forEach(item => {
          contributorsData.push(item.active_contributors);
          categories.push(item.display_month);
      });
     
      setState({
        loading: false, 
        categories: categories,
        data: [
          { name: 'Contributors', data: contributorsData }
        ]
      });
    });
  }, [setState]);

  const chartOptions = merge(CustomChart(), {
    xaxis: {
      categories: state.categories
    }
  });

  return (
    <Card>
      <CardHeader
        title="Active Contributors"
        subheader=""
      />
        <Box  sx={{ mt: 3, mx: 3 }} dir="ltr">
            <ReactApexChart type="line" series={state.data} options={chartOptions} height={364} />
        </Box>
    </Card>
  );
}

