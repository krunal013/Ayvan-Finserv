import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./EMICalculator.css"; // Assuming you have this CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenureYears, setLoanTenureYears] = useState(5);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfMonths = parseInt(loanTenureYears) * 12;

    if (!principal || !annualInterestRate || !numberOfMonths) {
      alert("Please fill in all fields correctly");
      return;
    }

    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const totalPayment = emi * numberOfMonths;
    const totalInterest = totalPayment - principal;

    setResult({ emi, totalPayment, totalInterest });
    setChartData({
      labels: ["Principal Amount", "Total Interest"],
      datasets: [
        {
          data: [principal, totalInterest],
          backgroundColor: ["#007bff", "#dc3545"],
          hoverBackgroundColor: ["#0056b3", "#bd2130"],
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
    <div className="lg:m-5 rounded-xl bg-gray-50 mt-7">
      {/* Informative Content Section 1 */}
      <div className="p-16 mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is EMI?</h2>
        <p className="text-gray-700 leading-relaxed">
          EMI stands for Equated Monthly Installment. It's a fixed amount of money that a borrower pays to the lender at a specified date each month until the loan is fully repaid. This amount includes both the principal component and the interest.
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
            EMI Calculator
          </h2>

          {/* Loan Amount Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Loan Amount: ₹{loanAmount}
            </label>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
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
              max="25"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Loan Tenure Slider (in Years) */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Loan Tenure: {loanTenureYears} {loanTenureYears === 1 ? "year" : "years"}
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={loanTenureYears}
              onChange={(e) => setLoanTenureYears(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            onClick={calculateEMI}
            className="w-full p-3 bg-blue-500 text-white rounded text-lg transition-colors hover:bg-blue-600"
          >
            Calculate EMI
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
                Loan Payment Breakdown
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
            Monthly EMI: ₹{result.emi.toFixed(2)}
          </p>
          <p className="bg-red-500 text-white lg:rounded-lg px-2 p-1 text-sm">
            Total Interest Payable: ₹{result.totalInterest.toFixed(2)}
          </p>
          <p className="bg-green-500 text-white lg:rounded-lg px-2 p-1 text-sm">
            Total Amount Payable: ₹{result.totalPayment.toFixed(2)}
          </p>
        </div>
      )}

      {/* Informative Content Section 2 */}
      <div className="p-5 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Formula to Calculate EMI</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The formula to calculate EMI is:
        </p>
        <code className="bg-gray-100 p-3 rounded block text-sm mb-3 text-black">
          EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
        </code>
        <p className="text-gray-700 leading-relaxed mb-3">
          Where:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><b>P</b> = Principal Loan Amount</li>
          <li><b>R</b> = Monthly Interest Rate (Annual Interest Rate divided by 12 and then by 100)</li>
          <li><b>N</b> = Number of Months (Loan Tenure in Years multiplied by 12)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Key Aspects of EMI</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><strong>Fixed Amount:</strong> The EMI amount remains constant throughout the loan tenure.</li>
          <li><strong>Principal and Interest:</strong> Each EMI payment includes both a portion of the principal and the interest on the outstanding loan balance.</li>
          <li><strong>Amortization Schedule:</strong> Over the loan tenure, the proportion of interest in each EMI payment gradually decreases while the principal component increases.</li>
          <li><strong>Loan Tenure Impact:</strong> A longer loan tenure results in lower monthly EMIs but a higher total interest paid over the life of the loan.</li>
          <li><strong>Interest Rate Sensitivity:</strong> Changes in the interest rate directly affect the EMI amount.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">How to Use This EMI Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Enter the following details to calculate your EMI:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
          <li><strong>Loan Amount:</strong> The total amount you wish to borrow.</li>
          <li><strong>Interest Rate (Annual):</strong> The annual interest rate offered by the lender.</li>
          <li><strong>Loan Tenure:</strong> The duration of the loan in years.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-5">
          Click the "Calculate EMI" button to see your estimated monthly payment, the total interest you will pay, and the total amount payable over the loan tenure. A pie chart will also visualize the breakdown of the total payment into principal and interest.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Important Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Please note that the results provided by this calculator are estimates for informational purposes only. Actual EMI amounts may vary slightly depending on the lender's specific calculation methods and any applicable fees or charges.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Always verify the exact EMI amount and loan terms with your lender.</li>
          <li>Consider your financial situation and repayment capacity before taking out a loan.</li>
          <li>A higher down payment can reduce the loan amount and consequently the EMI.</li>
        </ul>
      </div>
    </div>
  );
};

export default EMICalculator;