import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./LumpsumCalculator.css"; // Assuming you will create this CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const LumpsumCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(8);
  const [tenureYears, setTenureYears] = useState(5);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculateLumpsum = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(tenureYears);

    if (!p || !r || !t) {
      alert("Please fill in all fields correctly");
      return;
    }

    const maturityAmount = p * Math.pow(1 + r, t);
    const totalInterest = maturityAmount - p;

    setResult({ maturityAmount, totalInterest });
    setChartData({
      labels: ["Principal Amount", "Total Interest"],
      datasets: [
        {
          data: [p, totalInterest],
          backgroundColor: ["#6c757d", "#28a745"],
          hoverBackgroundColor: ["#5a6268", "#1e7e34"],
        },
      ],
    });
    setChartVisible(true);

    setTimeout(() => {
      if (chartRef.current) {
        chartRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <div className="lg:m-5 rounded-xl bg-gray-50">
      {/* Informative Content Section 1 */}
      <div className="p-16 mb-5 mt-7">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is a Lumpsum Investment?</h2>
        <p className="text-gray-700 leading-relaxed">
          A lumpsum investment involves investing a large sum of money in a single go in a chosen investment scheme, rather than investing periodically. This strategy is often used when an investor has a significant amount of capital available at once.
        </p>
      </div>

      <div
        className={`flex flex-col items-center lg:gap-5 w-full p-5 ${
          chartVisible ? "lg:flex-row lg:justify-center lg:items-start" : ""
        }`}
      >
        {/* Calculator Section */}
        <div className="bg-gray-50 rounded-b-lg w-full lg:py-16 max-w-md transition-all h-auto p-5">
          <h2 className="text-center text-2xl text-gray-800 mb-5">
            Lumpsum Calculator
          </h2>

          {/* Principal Amount Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Principal Amount: ₹{principal}
            </label>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Interest Rate Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Interest Rate (Annual): {interestRate}%
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Tenure Slider (in Years) */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Tenure: {tenureYears} {tenureYears === 1 ? "year" : "years"}
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            onClick={calculateLumpsum}
            className="w-full p-3 text-white rounded text-lg transition-colors"
            style={{ backgroundColor: "#6c757d", borderColor: "#6c757d", hoverBackgroundColor: "#5a6268" }}
          >
            Calculate Maturity
          </button>
        </div>

        {/* Graph Section */}
        <div
          ref={chartRef}
          className="w-full lg:w-1/3 mt-3 sm:mt-5 md:mt-5 lg:mt-5"
        >
          {chartVisible && chartData && (
            <div className="bg-gray-50 p-5 rounded-b-lg w-full max-w-lg">
              <h3 className="text-center text-xl text-gray-800 mb-5">
                Lumpsum Investment Breakdown
              </h3>
              <div className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[400px]">
                <Pie data={chartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {result && (
        <div className="text-center mb-10 flex tracking-wider flex-col lg:flex-row text-black gap-5 justify-center font-bold">
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#6c757d" }}>
            Principal Amount: ₹{principal}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#28a745" }}>
            Maturity Amount: ₹{result.maturityAmount.toFixed(2)}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#28a745" }}>
            Total Interest Earned: ₹{result.totalInterest.toFixed(2)}
          </p>
        </div>
      )}

      {/* Informative Content Section 2 */}
      <div className="p-5 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">How Does a Lumpsum Investment Work?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          In a lumpsum investment, you invest a significant amount of money at once. This investment then grows over a period based on the interest rate and compounding frequency of the chosen scheme. The returns are typically calculated based on the principal amount and the tenure of the investment.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Formula to Calculate Lumpsum Maturity Amount</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The formula to calculate the maturity amount of a lumpsum investment (assuming annual compounding) is:
        </p>
        <code className="bg-gray-100 p-3 rounded block text-sm mb-3">
          Maturity Amount = P (1 + r)^t
        </code>
        <p className="text-gray-700 leading-relaxed mb-3">
          Where:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><b>P</b> = Principal Amount (the initial investment)</li>
          <li><b>r</b> = Annual Interest Rate (in decimal)</li>
          <li><b>t</b> = Tenure of the investment in years</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Benefits of Lumpsum Investing</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><strong>Potential for Higher Returns:</strong> If the investment performs well, a larger initial investment can lead to significant returns.</li>
          <li><strong>Simplicity:</strong> It's a straightforward approach – invest once and wait for maturity.</li>
          <li><strong>Suitable for Large Capital:</strong> Ideal when you have a substantial amount of money readily available.</li>
          <li><strong>Power of Compounding:</strong> Returns can be compounded over the investment tenure, potentially increasing the final maturity amount.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">How to Use This Lumpsum Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Enter the following details to calculate the maturity amount of your lumpsum investment:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
          <li><strong>Principal Amount:</strong> The total amount you are investing.</li>
          <li><strong>Interest Rate (Annual):</strong> The expected annual rate of return (in percentage).</li>
          <li><strong>Tenure:</strong> The duration of the investment in years.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-5">
          Click the "Calculate Maturity" button to see the estimated total value of your investment at the end of the chosen period and the total interest earned. The pie chart provides a visual representation of your initial investment and the returns.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Important Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Before making a lumpsum investment, consider the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Market Volatility: Some investments like stocks or mutual funds can be volatile, and the actual returns may vary.</li>
          <li>Investment Horizon: Ensure your investment horizon aligns with the tenure you select.</li>
          <li>Financial Goals: Consider your overall financial goals and risk tolerance before making a significant lumpsum investment.</li>
          <li>Diversification: It's often advisable to diversify your investments rather than putting all your capital into a single scheme.</li>
        </ul>
      </div>
    </div>
  );
};

export default LumpsumCalculator;