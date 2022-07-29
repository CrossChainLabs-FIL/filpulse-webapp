import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
import { number } from '../utils/format';
import { CustomChart } from '../components/chart';
import { useState, useEffect } from 'react';

import { Client } from '../utils/client';

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const client = new Client();

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

export default function Issues() {
  const theme = useTheme();
  const [state, setState] = useState({ loading: true, chartData: [0, 0] });
  
  useEffect(() => {
    client.get('overview').then((overview) => {
      let open = parseInt((overview?.issues_open) ? overview?.issues_open : 0);
      let closed = parseInt((overview?.issues_closed) ? overview?.issues_closed : 0);

      setState({ loading: false, chartData: [open, closed] });
    });
  }, [setState]);

  const chartOptions = merge(CustomChart(), {
    colors: [
      theme.palette.chart.yellow[0],
      theme.palette.primary.main
    ],
    labels: ['Open', 'Closed'],
    stroke: { colors: [theme.palette.background] },
    legend: { floating: true, horizontalAlign: 'center' },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => number(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            value: {
              formatter: (val) => number(val)
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return number(sum);
              }
            }
          }
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Issues" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="donut" series={state.chartData} options={chartOptions} height={310} />
      </ChartWrapperStyle>
    </Card>
  );
}
