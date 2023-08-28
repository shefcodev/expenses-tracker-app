import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ configData }) => {
  return (
    <div className='chart'>
      {configData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={null}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;