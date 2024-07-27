"use client";
import React from 'react';
import { MetricData } from '../types';

interface DataComparisonProps {
  data: MetricData[];
}

const DataComparison: React.FC<DataComparisonProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p className='text-lg'>Month: {item.month}</p>
          <p className='text-lg'>Income: {item.endlineIncome}</p>
          <p className='text-lg'>Expense: {item.endlineExpense}</p>
          <p className='text-lg'>Profit: {item.endlineProfit}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DataComparison;
