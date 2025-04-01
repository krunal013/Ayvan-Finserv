import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./FDCalculator.css"; // Assuming you will create this CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const FDCalculator = () => {
  const [principal, setPrincipal] = useState(50000);
  const [interestRate, setInterestRate] = useState(7);
  const [tenureYears, setTenureYears] = useState(3);
  const [compoundingFrequency, setCompoundingFrequency] = useState("annually");
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculateFD = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(tenureYears);
    let n = 1;

    if (compoundingFrequency === "semi-annually") n = 2;
    else if (compoundingFrequency === "quarterly") n = 4;
    else if (compoundingFrequency === "monthly") n = 12;

    if (!p || !r || !t) {
      alert("Please fill in all fields correctly");
      return;
    }

    const maturityAmount = p * Math.pow(1 + r / n, n * t);
    const totalInterest = maturityAmount - p;

    setResult({ maturityAmount, totalInterest });
    setChartData({
      labels: ["Principal Amount", "Total Interest"],
      datasets: [
        {
          data: [p, totalInterest],
          backgroundColor: ["#ffc107", "#28a745"],
          hoverBackgroundColor: ["#e0a800", "#1e7e34"],
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is a Fixed Deposit (FD)?</h2>
        <p className="text-gray-700 leading-relaxed">
          A Fixed Deposit (FD) is a type of investment where you deposit a lump sum of money with a bank or financial institution for a specific period at a fixed rate of interest. Upon maturity, you receive the principal amount along with the accrued interest.
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
            FD Calculator
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
              max="15"
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
              max="10"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Compounding Frequency Select */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Compounding Frequency:
            </label>
            <select
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="w-full p-3 border rounded-xl border-gray-300 bg-white text-gray-700 appearance-none"
            >
              <option value="annually">Annually</option>
              <option value="semi-annually">Semi-Annually</option>
              <option value="quarterly">Quarterly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button
            onClick={calculateFD}
            className="w-full p-3 bg-warning text-white rounded text-lg transition-colors hover:bg-warning-dark"
            style={{ backgroundColor: "#ffc107", borderColor: "#ffc107", hoverBackgroundColor: "#e0a800" }}
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
                FD Investment Breakdown
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
          <p className="bg-warning text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#ffc107" }}>
            Maturity Amount: ₹{result.maturityAmount.toFixed(2)}
          </p>
          <p className="bg-success text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#28a745" }}>
            Total Interest Earned: ₹{result.totalInterest.toFixed(2)}
          </p>
        </div>
      )}

      {/* Informative Content Section 2 */}
      <div className="p-5 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">How Does a Fixed Deposit Work?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          When you invest in an FD, you lock in your funds for a chosen period, ranging from a few months to several years. The interest rate is predetermined and remains constant throughout the tenure. The interest can be compounded at different frequencies (annually, semi-annually, quarterly, or monthly), which affects the final maturity amount.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Formula to Calculate FD Maturity Amount</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The formula to calculate the maturity amount of a fixed deposit is:
        </p>
        <code className="bg-gray-100 p-3 rounded block text-sm mb-3 text-black">
          Maturity Amount = P (1 + r/n)^(n*t)
        </code>
        <p className="text-gray-700 leading-relaxed mb-3">
          Where:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><b>P</b> = Principal Amount (the initial deposit)</li>
          <li><b>r</b> = Annual Interest Rate (in decimal)</li>
          <li><b>n</b> = Number of times interest is compounded per year</li>
          <li><b>t</b> = Tenure of the deposit in years</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Benefits of Investing in Fixed Deposits</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><strong>Guaranteed Returns:</strong> FDs offer a fixed rate of interest, ensuring predictable returns.</li>
          <li><strong>Safety:</strong> Generally considered a low-risk investment option.</li>
          <li><strong>Flexibility in Tenure:</strong> You can choose the deposit tenure according to your financial goals.</li>
          <li><strong>Compounding Benefit:</strong> Interest earned can be compounded to generate higher returns.</li>
          <li><strong>Loan Facility:</strong> Banks often provide a loan facility against your FD.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">How to Use This FD Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Enter the following details to calculate the maturity amount of your fixed deposit:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
          <li><strong>Principal Amount:</strong> The amount you wish to deposit.</li>
          <li><strong>Interest Rate (Annual):</strong> The annual interest rate offered by the bank.</li>
          <li><strong>Tenure:</strong> The duration of the fixed deposit in years.</li>
          <li><strong>Compounding Frequency:</strong> The frequency at which the interest is compounded (Annually, Semi-Annually, Quarterly, Monthly).</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-5">
          Click the "Calculate Maturity" button to see the total amount you will receive at the end of the deposit tenure and the total interest earned. The pie chart visually represents the proportion of your principal and the interest earned.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Important Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          While fixed deposits are generally safe, consider the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Interest earned from FDs is taxable according to your income tax slab.</li>
          <li>Premature withdrawal of an FD may attract penalties.</li>
          <li>Compare interest rates offered by different banks and financial institutions before investing.</li>
          <li>Consider your liquidity needs before locking in funds for a long tenure.</li>
        </ul>
      </div>
    </div>
  );
};

export default FDCalculator;