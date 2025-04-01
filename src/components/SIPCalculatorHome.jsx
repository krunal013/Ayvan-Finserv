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
    <div className="lg:m-5 rounded-xl flex flex-col lg:flex-row p-10">
      {/* Left Informative Content */}
      <div className="lg:w-1/3 lg:pr-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is SIP?</h2>
          <p className="text-gray-700 leading-relaxed">
            SIP stands for Systematic Investment Plan. It's an investment method where you invest a fixed sum of money regularly, typically monthly, in a chosen investment scheme like mutual funds. This approach instills a disciplined way of saving and investing.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Benefits of SIP Investing</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Rupee Cost Averaging:</strong> Investing a fixed amount regularly helps average out the purchase cost of units.</li>
            <li><strong>Power of Compounding:</strong> Reinvesting returns leads to significant growth over time.</li>
            <li><strong>Disciplined Investing:</strong> Encourages regular and consistent investment habits.</li>
            <li><strong>Convenience:</strong> SIPs are easy to set up and automate.</li>
            <li><strong>Accessibility:</strong> You can start investing with relatively small amounts.</li>
          </ul>
        </div>
      </div>

      {/* Right Calculator and Graph Section */}
      <div className="lg:w-2/3 flex lg:flex-row flex-col lg:items-start">
        {/* Calculator Section */}
        <div className="bg-gray-100 rounded-lg w-full lg:w-1/2 p-6 shadow-md mb-8 lg:mb-0 lg:mr-4">
          <h2 className="text-center text-2xl text-gray-800 mb-5">
            SIP Calculator
          </h2>

          {/* Amount Slider */}
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
            <select
              value={inflation}
              onChange={(e) => setInflation(e.target.value)}
              className="w-full p-3 border-gray-300 rounded-md bg-white text-gray-500 appearance-none"
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
        {chartVisible && (
          <div
            ref={chartRef}
            className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md flex-shrink-0"
          >
            <h3 className="text-center text-xl text-gray-800 mb-5">
              SIP Investment Breakdown
            </h3>
            <div className="w-full h-[300px]">
              <Pie
                data={chartData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
            {result && (
              <div className="text-center mt-6 flex tracking-wider flex-col lg:flex-row text-black gap-5 justify-center font-bold">
                <p className="bg-orange-500 text-white rounded-lg px-2 py-1 text-sm">
                  Total Investment: ₹{amount * 12 * duration}
                </p>
                <p className="bg-green-500 text-white rounded-lg px-2 py-1 text-sm">
                  Total Value: ₹{result.toFixed(2)}
                </p>
                {inflation === "yes" && (
                  <p className="text-red-500 text-sm">Assumed annual inflation rate is 6%</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SIPCalculator;