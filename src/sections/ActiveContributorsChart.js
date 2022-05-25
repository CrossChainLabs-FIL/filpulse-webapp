import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { CustomChart } from '../components/chart';

const CHART_DATA = [
  {
    year: 2021,
    data: [
      { name: 'Commits', data: [25, 15, 35, 42, 45, 39, 55, 65, 59] },
    ]
  }
];

export default function ActiveContributors() {
  const [seriesData, setSeriesData] = useState(2021);

  const handleChangeSeriesData = (event) => {
    setSeriesData(Number(event.target.value));
  };

  const chartOptions = merge(CustomChart(), {
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  });

  return (
    <Card>
      <CardHeader
        title="Active Contributors"
        subheader=""
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="line" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}

