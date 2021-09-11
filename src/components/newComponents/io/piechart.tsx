import React from 'react';
import { css } from '@emotion/css';
import { theme } from '../../../styles/theme';
import { PieChart, Pie, Label, Cell } from 'recharts';

function NormalPieChart({ value }: { value: number }) {
  const [data, setData] = React.useState([
    { name: 'Bubble Tea Sold', value: 94.47 },
    { name: 'Bubble Tea Left', value: 6.53 },
  ]);
  React.useEffect(() => {
    let value2 = 100 - value;
    setData([
      { name: 'value1', value: value },
      { name: 'value2', value: value2 },
    ]);
  }, []);

  return (
    <div className={Style.ps1}>
      <PieChart width={48} height={48}>
        <Pie data={data} dataKey='value' innerRadius={12}>
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill={theme.colorWhite3} />;
            }
            return <Cell key={`cell-${index}`} fill={theme.colorGrey} />;
          })}
          <Label
            value={data[0].value}
            position='center'
            fill='grey'
            style={{
              fontSize: '9px',
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
}

export default NormalPieChart;

const Style = {
  ps1: css`
    bottom: 6px;
    position: relative;
    margin-right: 4px;
  `,
};
