import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./PPFCalculator.css"; // Assuming you have this CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const PPFCalculator = () => {
  const [annualInvestment, setAnnualInvestment] = useState(15000);
  const [interestRate, setInterestRate] = useState(7.1);
  const [tenureYears, setTenureYears] = useState(15);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculatePPF = () => {
    const p = parseFloat(annualInvestment);
    const r = parseFloat(interestRate) / 100;
    const t = parseInt(tenureYears);
    let maturityAmount = 0;
    let totalInvestment = 0;

    if (!p || !r || !t) {
      alert("Please fill in all fields correctly");
      return;
    }

    let balance = 0;
    for (let i = 1; i <= t; i++) {
      balance += p;
      balance *= (1 + r);
    }
    maturityAmount = balance;
    totalInvestment = p * t;
    const totalInterest = maturityAmount - totalInvestment;

    const dataForChart = {
      labels: ["Total Investment", "Total Interest"],
      datasets: [
        {
          data: [totalInvestment, totalInterest],
          backgroundColor: ["#6610f2", "#fd7e14"],
          hoverBackgroundColor: ["#4d089a", "#e08e0b"],
        },
      ],
    };
    setChartData(dataForChart);
    console.log("PPF Calculator - chartData after setting:", dataForChart);
    setResult({ maturityAmount, totalInvestment, totalInterest });
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is a Public Provident Fund (PPF)?</h2>
        <p className="text-gray-700 leading-relaxed">
          The Public Provident Fund (PPF) is a popular long-term investment scheme in India, backed by the Government. It offers attractive interest rates and tax benefits, making it a preferred choice for those looking for a safe and secure investment avenue to build a retirement corpus.
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
            PPF Calculator
          </h2>

          {/* Annual Investment Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Annual Investment: ₹{annualInvestment}
            </label>
            <input
              type="range"
              min="500"
              max="150000"
              step="100"
              value={annualInvestment}
              onChange={(e) => setAnnualInvestment(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Interest Rate Input */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Interest Rate (Annual): {interestRate}%
            </label>
            <input
              type="number"
              min="1"
              max="15"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-3 border rounded-xl border-gray-300 bg-white text-gray-700 appearance-none"
            />
          </div>

          {/* Tenure Slider (in Years) */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Tenure: {tenureYears} years
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
            onClick={calculatePPF}
            className="w-full p-3 text-white rounded text-lg transition-colors"
            style={{ backgroundColor: "#6610f2", borderColor: "#6610f2", hoverBackgroundColor: "#4d089a" }}
          >
            Calculate PPF
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
                PPF Investment Breakdown
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
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#6610f2" }}>
            Total Investment: ₹{result.totalInvestment.toFixed(2)}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#fd7e14" }}>
            Total Interest Earned: ₹{result.totalInterest.toFixed(2)}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#28a745" }}>
            Maturity Amount: ₹{result.maturityAmount.toFixed(2)}
          </p>
        </div>
      )}

      {/* Informative Content Section 2 */}
      <div className="p-5 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Features and Benefits of PPF</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li><strong>Government Backing:</strong> PPF is a scheme backed by the Government of India, ensuring the safety of your investment.</li>
          <li><strong>Attractive Interest Rate:</strong> It offers a competitive interest rate, which is reviewed and revised by the government periodically.</li>
          <li><strong>Tax Benefits:</strong> Investments in PPF qualify for tax deductions under Section 80C of the Income Tax Act. The interest earned and the maturity amount are also tax-free (EEE - Exempt, Exempt, Exempt).</li>
          <li><strong>Long Tenure:</strong> PPF has a maturity period of 15 years, which can be extended in blocks of 5 years. This encourages long-term savings.</li>
          <li><strong>Small Initial Investment:</strong> You can start with a minimum investment of ₹500 per year.</li>
          <li><strong>Loan Facility:</strong> Loan can be availed against the PPF balance after a certain period.</li>
          <li><strong>Partial Withdrawal:</strong> Partial withdrawals are allowed after completion of 5 years.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">How to Use This PPF Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Enter the following details to calculate the maturity amount of your PPF investment:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
          <li><strong>Annual Investment:</strong> The amount you plan to invest annually (up to a maximum limit of ₹1.5 lakh).</li>
          <li><strong>Interest Rate (Annual):</strong> The current annual interest rate offered on PPF.</li>
          <li><strong>Tenure:</strong> The investment period in years (default tenure is 15 years).</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-5">
          Click the "Calculate PPF" button to see an estimate of your total investment, the total interest earned, and the final maturity amount. The pie chart provides a visual breakdown of these components.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Important Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Please remember that the results from this calculator are estimates based on the inputs provided. Actual PPF returns can vary due to changes in interest rates by the Government of India.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>The maximum investment allowed in PPF in a financial year is ₹1.5 lakh.</li>
          <li>Premature closure of PPF account is generally not allowed except in certain specified circumstances.</li>
          <li>It is advisable to stay invested for the full tenure to reap the maximum benefits of the scheme.</li>
        </ul>
      </div>
    </div>
  );
};

export default PPFCalculator;