import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculator = () => {
  // Using years for duration here – you can convert to months later if needed.
  const [amount, setAmount] = useState(5000);
  const [duration, setDuration] = useState(10);
  const [rate, setRate] = useState(8);
  const [inflation, setInflation] = useState("");
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculateSIP = () => {
    // Convert years to months for calculation
    const principal = parseFloat(amount);
    const months = parseInt(duration) * 12;
    const annualRate = parseFloat(rate);
    const inflationRate = inflation === "yes" ? 6 / 100 : 0;

    if (!principal || !months || !annualRate) {
      alert("Please fill in all fields correctly");
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    let totalValue = 0;

    for (let month = 1; month <= months; month++) {
      let adjustedPrincipal =
        principal / Math.pow(1 + inflationRate, month / 12);
      totalValue =
        adjustedPrincipal *
        (((1 + monthlyRate) ** month - 1) / monthlyRate) *
        (1 + monthlyRate);
    }

    const totalInvestment = principal * months;
    setResult(totalValue);
    setChartData({
      labels: ["Total Investment", "Total Returns"],
      datasets: [
        {
          data: [totalInvestment, totalValue - totalInvestment],
          backgroundColor: ["#ff6b00", "#4CAF50"],
          hoverBackgroundColor: ["#ff9d2e", "#2E7D32"],
        },
      ],
    });
    setChartVisible(true);

    // Scroll to chart on mobile devices
    setTimeout(() => {
      if (chartRef.current) {
        chartRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <div className="lg:m-5 rounded-xl bg-gray-50">
      <div
        className={`flex flex-col items-center lg:gap-5 w-full p-5 ${
          chartVisible ? "lg:flex-row lg:justify-center lg:items-start" : ""
        }`}
      >
        {/* Calculator Section */}
        <div className="bg-gray-50 rounded-b-lg w-full lg:py-16 max-w-md transition-all h-auto p-5">
          <h2 className="text-center text-2xl text-gray-800 mb-5">
            SIP Calculator
          </h2>

          {/* Amount Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Amount: ₹{amount}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Duration Slider (in Years) */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Duration: {duration} {duration === "1" ? "year" : "years"}
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Rate of Return Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Rate of Return: {rate}%
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Inflation Selector */}
          <div className="mb-5">
            <select
              value={inflation}
              onChange={(e) => setInflation(e.target.value)}
              className="w-full p-3 border-green-500 rounded-xl border border-dashed bg-gray-50 text-gray-500 appearance-none"
            >
              <option value="" disabled hidden>
                Select Inflation
              </option>
              <option value="no">Inflation: No</option>
              <option value="yes">Inflation: Yes</option>
            </select>
          </div>

          <button
            onClick={calculateSIP}
            className="w-full p-3 bg-green-500 text-white rounded text-lg transition-colors hover:bg-green-600"
          >
            Calculate
          </button>
        </div>

        {/* Graph Section */}
        <div
          ref={chartRef}
          className="w-full lg:w-1/3 mt-3 sm:mt-5 md:mt-5 lg:mt-5"
        >
          {chartVisible && (
            <div className="bg-gray-50 p-5 rounded-b-lg w-full max-w-lg">
              <h3 className="text-center text-xl text-gray-800 mb-5">
                SIP Investment Breakdown
              </h3>
              <div className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[400px]">
                <Pie
                  data={chartData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {result && (
        <div className="text-center mb-10 flex tracking-wider flex-col lg:flex-row text-black gap-5 justify-center font-bold">
          <p className="bg-orange-500 text-white lg:rounded-lg px-2 p-1 text-sm">
            Total Investment: {amount * 12 * duration}
          </p>
          <p className="bg-green-500 text-white lg:rounded-lg px-2 p-1 text-sm">
            Total Value: {result.toFixed(2)}
          </p>
          {inflation === "yes" && (
            <p className="text-red-500">Assumed annual inflation rate is 6%</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
