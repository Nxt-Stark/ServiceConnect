import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

const PerformanceChart = ({ dataThisWeek, dataLastWeek }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'This Week',
        data: dataThisWeek,
        borderColor: '#FFA500',
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(255, 165, 0, 0.5)');
          gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Last Week',
        data: dataLastWeek,
        borderColor: '#FF6B6B',
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(255, 107, 107, 0.5)');
          gradient.addColorStop(1, 'rgba(255, 107, 107, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        data: Array(6).fill(null).concat([dataLastWeek[6]]).concat(Array(5).fill(null)),
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        pointRadius: 8,
        pointBackgroundColor: '#FF6B6B',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: '#1D2B5B',
        bodyColor: '#1D2B5B',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: '#b2bec3',
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#b2bec3',
          stepSize: 25,
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{
      backgroundColor: '#F7F9FC',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      width: '100%',
      height: '100%' 
    }}>
      <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'bold', color: '#1D2B5B', marginBottom: '10px' }}>
        Performance
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginBottom: '10px', fontSize: '14px', color: '#1D2B5B' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: '#FFA500', fontWeight: 'bold' }}>●</span> This Week <span style={{ fontWeight: 'bold' }}>1.245</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: '#FF6B6B', fontWeight: 'bold' }}>●</span> Last Week <span style={{ fontWeight: 'bold' }}>1.356</span>
        </div>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;
