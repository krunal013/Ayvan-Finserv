import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./SWPCalculator.css"; // You might need to adjust the CSS file import

ChartJS.register(ArcElement, Tooltip, Legend);

const SWPCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(500000);
  const [withdrawalAmount, setWithdrawalAmount] = useState(5000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(10);
  const [tenureYears, setTenureYears] = useState(10);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculateSWP = () => {
    const initialAmount = parseFloat(initialInvestment);
    const monthlyWithdrawal = parseFloat(withdrawalAmount);
    const annualReturnRate = parseFloat(expectedReturnRate) / 100;
    const monthlyReturnRate = annualReturnRate / 12;
    const months = parseInt(tenureYears) * 12;

    if (!initialAmount || !monthlyWithdrawal || !annualReturnRate || !months) {
      alert("Please fill in all fields correctly");
      return;
    }

    let remainingBalance = initialAmount;
    let totalWithdrawal = 0;

    for (let i = 0; i < months; i++) {
      if (remainingBalance <= 0) {
        break;
      }
      remainingBalance *= (1 + monthlyReturnRate);
      remainingBalance -= monthlyWithdrawal;
      totalWithdrawal += monthlyWithdrawal;
    }

    const dataForChart = {
      labels: ["Total Amount Withdrawn", "Remaining Balance"],
      datasets: [
        {
          data: [totalWithdrawal, Math.max(0, remainingBalance)],
          backgroundColor: ["#00c853", "#3f51b5"],
          hoverBackgroundColor: ["#009639", "#283593"],
        },
      ],
    };
    setChartData(dataForChart);
    console.log("SWP Calculator - chartData after setting:", dataForChart);
    setResult({ totalWithdrawal, remainingBalance: Math.max(0, remainingBalance) });
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is a Systematic Withdrawal Plan (SWP)?</h2>
        <p className="text-gray-700 leading-relaxed">
          A Systematic Withdrawal Plan (SWP) is a facility offered by mutual funds and other investment avenues that allows investors to withdraw a fixed amount of money at regular intervals (e.g., monthly, quarterly, annually) from their investment corpus. It's a way to generate a regular income stream from your investments, particularly useful during retirement or for meeting regular expenses.
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
            SWP Calculator
          </h2>

          {/* Initial Investment Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Initial Investment: ₹{initialInvestment}
            </label>
            <input
              type="range"
              min="100000"
              max="10000000"
              step="100000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Withdrawal Amount Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Monthly Withdrawal Amount: ₹{withdrawalAmount}
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Expected Return Rate Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Expected Return Rate (Annual): {expectedReturnRate}%
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={expectedReturnRate}
              onChange={(e) => setExpectedReturnRate(e.target.value)}
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
            onClick={calculateSWP}
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
                SWP Breakdown
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
          <p className="bg-blue-500 text-white lg:rounded-lg px-2 p-1 text-sm">
            Total Amount Withdrawn: ₹{result.totalWithdrawal.toFixed(2)}
          </p>
          <p className="bg-purple-500 text-white lg:rounded-lg px-2 p-1 text-sm">
            Remaining Balance: ₹{result.remainingBalance.toFixed(2)}
          </p>
        </div>
      )}

      {/* Informative Content Section 2 */}
      <div className="p-5 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Benefits of a Systematic Withdrawal Plan</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li><strong>Regular Income Stream:</strong> SWP provides a fixed income at regular intervals, which can be essential during retirement or for managing recurring expenses.</li>
          <li><strong>Disciplined Withdrawal:</strong> It helps in systematic withdrawal of funds, preventing impulsive or unnecessary drawdowns.</li>
          <li><strong>Potential for Continued Growth:</strong> The remaining investment continues to earn returns, potentially allowing the corpus to last longer.</li>
          <li><strong>Tax Efficiency:</strong> In some cases, SWP can be more tax-efficient than withdrawing a lump sum, as withdrawals are taxed based on the applicable tax rules for the investment type.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">How to Use This SWP Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Enter the following details to calculate the potential outcome of your Systematic Withdrawal Plan:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
          <li><strong>Initial Investment:</strong> The total amount you have invested or plan to invest.</li>
          <li><strong>Monthly Withdrawal Amount:</strong> The fixed amount you wish to withdraw every month.</li>
          <li><strong>Expected Return Rate (Annual):</strong> The anticipated annual rate of return on your investment (in percentage).</li>
          <li><strong>Tenure:</strong> The duration in years for which you plan to make withdrawals.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          After entering the details, click the "Calculate" button to see the estimated total amount withdrawn over the chosen period and the remaining balance at the end of the tenure. The pie chart visually represents the proportion of the total withdrawn amount and the remaining balance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Important Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Please note that the results from this calculator are estimates based on the provided inputs and assume a constant rate of return. Actual investment returns can fluctuate, and the outcome may vary.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>The actual rate of return on your investment can be higher or lower than the assumed rate.</li>
          <li>This calculator does not account for taxes or any fees associated with the investment or withdrawals.</li>
          <li>Inflation can reduce the purchasing power of your withdrawals over time. Consider this factor when planning your SWP.</li>
          <li>It's advisable to consult with a financial advisor to determine the most suitable withdrawal strategy based on your individual financial goals and circumstances.</li>
          <li>The calculator assumes monthly withdrawals. The results might differ slightly for other withdrawal frequencies.</li>
        </ul>
      </div>
    </div>
  );
};

export default SWPCalculator;