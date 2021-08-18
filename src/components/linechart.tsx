import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { css } from '@emotion/css';
const data = [
  {
    name: '02/10',
    pv: 40,
  },
  {
    name: '02/11',
    pv: 30,
  },
  {
    name: '02/12',
    pv: 15,
  },

  {
    name: '02/13',
    pv: 5,
  },
  {
    name: '02/14',
    pv: 40,
  },
  {
    name: '02/15',
    pv: 41,
  },
  {
    name: '02/16',
    pv: 41,
  },
  {
    name: '02/17',
    pv: 43,
  },
  {
    name: '02/18',
    pv: 30,
  },
  {
    name: '02/19',
    pv: 20,
  },
  {
    name: '02/20',
    pv: 25,
  },
  {
    name: '02/21',
    pv: 5,
  },
  {
    name: '02/22',
    pv: 20,
  },
  {
    name: '02/23',
    pv: 40,
  },
];

const Chart = () => {
  return (
    <div
      className={css`
        @media (max-width: 983px) {
          overflow: auto;
        }
      `}
    >
      <div
        className={css`
          @media (max-width: 983px) {
            width: 450px;
          }
        `}
      >
        <ResponsiveContainer width='99%' aspect={3}>
          <LineChart
            width={1080}
            height={421}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray='1 1'
              vertical={true}
              horizontal={false}
            />
            <XAxis
              fontSize={16}
              tickMargin={16}
              tickLine={false}
              axisLine={false}
              dataKey='name'
            />
            <YAxis
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
              fontSize={16}
              tickMargin={21}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Line
              dataKey='pv'
              name='Kongkursbo'
              strokeWidth={3}
              dot={true}
              stroke='#0059C8'
            />

            {/* <ReferenceLine y={80} label={} stroke="red" strokeWidth={0}  /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
