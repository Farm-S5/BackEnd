import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './stat.css';

export const Stat = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Reference to the Chart.js instance

  useEffect(() => {
    // Create or update chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Example Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgb(0, 64, 6)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              
            }
          }]
        }
      }
    });

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="chart-container"> {/* Ajouter la classe pour le conteneur */}
      <canvas ref={chartRef} className="chart" /> {/* Ajouter la classe pour le graphique */}
    </div>
  );
};

export default Stat;
