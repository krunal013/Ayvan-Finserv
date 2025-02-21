import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import './EMICalculator.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SIPCalculator = () => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [rate, setRate] = useState('');
  const [inflation, setInflation] = useState(''); // Default is empty to trigger gray placeholder
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  const calculateSIP = () => {
    const principal = parseFloat(amount);
    const months = parseInt(duration);
    const annualRate = parseFloat(rate);
    const inflationRate = inflation === 'yes' ? 6 / 100 : 0;

    if (!principal || !months || !annualRate) {
      alert('Please fill in all fields correctly');
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    let totalValue = 0;
    const monthlyInvestments = [];
    const totalSIPValues = [];

    for (let month = 1; month <= months; month++) {
      let adjustedPrincipal = principal / Math.pow(1 + inflationRate, month / 12);
      totalValue = adjustedPrincipal * (((1 + monthlyRate) ** month - 1) / monthlyRate) * (1 + monthlyRate);
      monthlyInvestments.push(month * adjustedPrincipal);
      totalSIPValues.push(totalValue);
    }

    setResult(totalValue);
    setChartData({
      labels: Array.from({ length: months }, (_, i) => i + 1),
      datasets: [
        {
          label: 'SIP Growth (Total Value)',
          data: totalSIPValues,
          fill: false,
          borderColor: '#4CAF50',
          tension: 0.1,
        },
        {
          label: 'Total Investment',
          data: monthlyInvestments,
          fill: false,
          borderColor: '#FF6F61',
          tension: 0.1,
        },
      ],
    });
  };

  useEffect(() => {
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartInstance]);

  return (
    <div className="sip-calculator-wrapper">
      <h2>SIP Calculator</h2>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Duration (in months)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Rate of Return (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <select value={inflation} onChange={(e) => setInflation(e.target.value)}>
        <option value="" disabled hidden>Select Inflation</option>
        <option value="no">Inflation: No</option>
        <option value="yes">Inflation: Yes</option>
      </select>
      <button onClick={calculateSIP}>Calculate</button>

      {result && (
        <div className="results">
          <h3>Result</h3>
          <p>Total Investment: {amount * duration}</p>
          <p>Total Value: {result.toFixed(2)}</p>
          {inflation === 'yes' && <p className="inflation-warning">Assumed annual inflation rate is 6%</p>}
        </div>
      )}

      {chartData && (
        <div className="chart-wrapper">
          <h3>SIP Growth Over Time</h3>
          <Line data={chartData} ref={(chart) => setChartInstance(chart)} />
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
