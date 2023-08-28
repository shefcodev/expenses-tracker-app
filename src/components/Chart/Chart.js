import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ chartConfigData }) => {
  const dataValues = chartConfigData.map((dataValue) => dataValue.value);
  const maxValue = Math.max(...dataValues);

  return (
    <div className='chart'>
      {chartConfigData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
