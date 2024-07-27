"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { MetricData } from '../types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CompareGraphProps {
  baselineData: MetricData[];
  endlineData: MetricData[];
}

const CompareGraph: React.FC<CompareGraphProps> = ({ baselineData, endlineData }) => {
  const combinedData = baselineData.map((base, index) => ({
    month: base.month,
    baselineIncome: base.baselineIncome,
    baselineExpense: base.baselineExpense,
    baselineProfit: base.baselineProfit,
    endlineIncome: endlineData[index].endlineIncome,
    endlineExpense: endlineData[index].endlineExpense,
    endlineProfit: endlineData[index].endlineProfit,
  }));

  const labels = combinedData.map(data => data.month);

  const data = {
    labels,
    datasets: [
        {
          label: 'Baseline Income',
          data: combinedData.map(data => data.baselineIncome),
          borderColor: '#8884d8',
          fill: false,
          borderDash: [5, 5], 
        },
        {
          label: 'Endline Income',
          data: combinedData.map(data => data.endlineIncome),
          borderColor: '#8884d8',
          fill: false,
          borderDash: [], 
        },
        {
          label: 'Baseline Expense',
          data: combinedData.map(data => data.baselineExpense),
          borderColor: '#ff7300',
          fill: false,
          borderDash: [5, 5], 
        },
        {
          label: 'Endline Expense',
          data: combinedData.map(data => data.endlineExpense),
          borderColor: '#ff7300',
          fill: false,
          borderDash: [], 
        },
        {
          label: 'Baseline Profit',
          data: combinedData.map(data => data.baselineProfit),
          borderColor: '#387908',
          fill: false,
          borderDash: [5, 5], 
        },
        {
          label: 'Endline Profit',
          data: combinedData.map(data => data.endlineProfit),
          borderColor: '#387908',
          fill: false,
          borderDash: [], 
        },
      ],
    };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CompareGraph;
