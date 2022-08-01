import merge from 'lodash/merge';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { CustomChart } from '../components/chart';
import { Client } from '../utils/client';

const client = new Client();

export default function Commits() {
  const [state, setState] = useState({
    loading: true, data: [
      { name: 'Commits', data: [] }
    ]
  });


  useEffect(() => {
    client.get('commits').then((commits) => {
      commits.pop();
      if (commits.length > 12) {
        //remove first length - 12 elements
        commits.splice(0, commits.length - 12);
      }

      let commitsData = [];
      let categories = [];

      commits.forEach(item => {
        commitsData.push(item.commits);
        categories.push(item.display_month);
      });
     
      setState({
        loading: false, 
        categories: categories,
        data: [
          { name: 'Commits', data: commitsData }
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
        title="Commits"
        subheader=""
      />
        <Box  sx={{ mt: 3, mx: 3 }} dir="ltr">
            <ReactApexChart type="bar" series={state.data} options={chartOptions} height={364} />
        </Box>
    </Card>
  );
}

