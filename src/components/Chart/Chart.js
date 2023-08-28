import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataArr }) => {
  return (
    <div className='chart'>
      {dataArr.map((configData) => (
        <ChartBar
          key={configData.id}
          value={configData.value}
          maxValue={null}
          labal={configData.label}
        />
      ))}
    </div>
  );
};

export default Chart;
