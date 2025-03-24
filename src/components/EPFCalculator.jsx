import React, { useState, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./EPFCalculator.css"; // Assuming you will create this CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const EPFCalculator = () => {
  const [employeeContribution, setEmployeeContribution] = useState(1800);
  const [employerContributionRate, setEmployerContributionRate] = useState(8.33);
  const [interestRate, setInterestRate] = useState(8.15);
  const [yearsOfService, setYearsOfService] = useState(10);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  const calculateEPF = () => {
    const employeeMonthly = parseFloat(employeeContribution);
    const employerRate = parseFloat(employerContributionRate) / 100;
    const annualRate = parseFloat(interestRate) / 100;
    const months = parseInt(yearsOfService) * 12;

    if (!employeeMonthly || !employerRate || !annualRate || !months) {
      alert("Please fill in all fields correctly");
      return;
    }

    let totalEmployeeContribution = 0;
    let totalEmployerContribution = 0;
    let totalInterest = 0;
    let closingBalance = 0;

    for (let i = 1; i <= months; i++) {
      const employerMonthly = employeeMonthly * employerRate;
      totalEmployeeContribution += employeeMonthly;
      totalEmployerContribution += employerMonthly;
      const interest = closingBalance * (annualRate / 12);
      totalInterest += interest;
      closingBalance += employeeMonthly + employerMonthly + interest;
    }

    const dataForChart = {
      labels: ["Employee Contribution", "Employer Contribution", "Interest"],
      datasets: [
        {
          data: [totalEmployeeContribution, totalEmployerContribution, totalInterest],
          backgroundColor: ["#6610f2", "#fd7e14", "#28a745"],
          hoverBackgroundColor: ["#4d089a", "#e08e0b", "#1e7e34"],
        },
      ],
    };
    setChartData(dataForChart);
    console.log("EPF Calculator - chartData after setting:", dataForChart);
    setResult({
      totalEmployeeContribution,
      totalEmployerContribution,
      totalInterest,
      maturityAmount: closingBalance,
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
      <div className="p-9 mb-5 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is the Employees' Provident Fund (EPF)?</h2>
        <p className="text-gray-700 leading-relaxed">
          The Employees' Provident Fund (EPF) is a retirement savings scheme mandated by the Government of India. It is managed by the Employees' Provident Fund Organisation (EPFO). This scheme aims to provide financial security to employees in their retirement.
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
            EPF Calculator
          </h2>

          {/* Employee Contribution Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Employee Monthly Contribution: ₹{employeeContribution}
            </label>
            <input
              type="range"
              min="500"
              max="20000"
              step="100"
              value={employeeContribution}
              onChange={(e) => setEmployeeContribution(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Employer Contribution Rate Input */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Employer Contribution Rate: {employerContributionRate}%
            </label>
            <input
              type="number"
              min="1"
              max="20"
              step="0.01"
              value={employerContributionRate}
              onChange={(e) => setEmployerContributionRate(e.target.value)}
              className="w-full p-3 border rounded-xl border-gray-300 bg-white text-gray-700 appearance-none"
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

          {/* Years of Service Slider */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Years of Service: {yearsOfService} years
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={yearsOfService}
              onChange={(e) => setYearsOfService(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            onClick={calculateEPF}
            className="w-full p-3 text-white rounded text-lg transition-colors"
            style={{ backgroundColor: "#6610f2", borderColor: "#6610f2", hoverBackgroundColor: "#4d089a" }}
          >
            Calculate EPF
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
                EPF Contribution Breakdown
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
            Employee Contribution: ₹{result.totalEmployeeContribution.toFixed(2)}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#fd7e14" }}>
            Employer Contribution: ₹{result.totalEmployerContribution.toFixed(2)}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#28a745" }}>
            Interest Earned: ₹{result.totalInterest.toFixed(2)}
          </p>
          <p className="text-white lg:rounded-lg px-2 p-1 text-sm" style={{ backgroundColor: "#007bff" }}>
            Total Maturity Amount: ₹{result.maturityAmount.toFixed(2)}
          </p>
        </div>
      )}

      {/* Informative Content Section 2 */}
      <div className="p-5 mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">How Does EPF Work?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Under the EPF scheme, both the employee and the employer make contributions towards the employee's retirement fund every month. A portion of the employee's salary (currently 12%) is deducted as their contribution, and the employer also contributes an equal amount. However, the employer's contribution is split into two parts: 8.33% goes towards the Employees' Pension Scheme (EPS), and the remaining 3.67% is added to the EPF. Interest is earned on the total accumulated balance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Who is Eligible for EPF?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Generally, any employee working in an establishment with 20 or more employees is eligible for EPF. Employees earning a basic wage of up to ₹15,000 per month are mandatorily covered under the scheme.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Contribution Rates</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The current contribution rates are as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><strong>Employee's Contribution:</strong> 12% of basic wages and dearness allowance.</li>
          <li><strong>Employer's Contribution:</strong> 12% of basic wages and dearness allowance, split as:
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>8.33% towards Employees' Pension Scheme (EPS) (subject to a maximum wage ceiling of ₹15,000)</li>
              <li>3.67% towards Employees' Provident Fund (EPF)</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-3">
          Note: For the purpose of this calculator, we are focusing on the EPF component (employee's contribution and the 3.67% employer's contribution towards EPF). The employer contribution rate you input might reflect the total 12% or just the EPF portion as per your understanding. This calculator uses the provided employer contribution rate directly for simplicity.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Interest Rate on EPF</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The interest rate on EPF is declared by the EPFO annually. The rate can vary each year based on the prevailing economic conditions and the EPFO's performance. The interest is compounded annually and credited to the member's account at the end of the financial year.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Benefits of EPF</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-5">
          <li><strong>Retirement Savings:</strong> Encourages disciplined saving for retirement.</li>
          <li><strong>Tax Benefits:</strong> Contributions made towards EPF are eligible for tax deduction under Section 80C of the Income Tax Act. The interest earned is also tax-exempt under certain conditions.</li>
          <li><strong>Power of Compounding:</strong> The annual interest earned on the accumulated balance helps in growing the retirement corpus significantly over time.</li>
          <li><strong>Loan Facility:</strong> Members can avail loans against their EPF balance for various purposes like education, marriage, medical treatment, etc.</li>
          <li><strong>Withdrawal Benefits:</strong> Members can withdraw their EPF balance under certain conditions, such as retirement, resignation after a specific period, or for specific needs.</li>
          <li><strong>Portability:</strong> EPF accounts are portable, allowing employees to transfer their balance when they change jobs.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">How to Use This EPF Calculator</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Enter the following details to estimate your EPF balance at the time of retirement:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
          <li><strong>Employee Monthly Contribution:</strong> The fixed amount you contribute to your EPF each month.</li>
          <li><strong>Employer Contribution Rate:</strong> The percentage of your basic salary contributed by your employer towards EPF (typically 3.67% if considering only the EPF portion, or 12% if you want to see the total contribution).</li>
          <li><strong>Interest Rate (Annual):</strong> The expected annual interest rate on your EPF balance.</li>
          <li><strong>Years of Service:</strong> The total number of years you expect to contribute to your EPF.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-5">
          Click the "Calculate EPF" button to see an estimate of your total employee contribution, total employer contribution, the total interest you might earn, and the final maturity amount. The pie chart provides a visual breakdown of these components.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3">Important Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Please remember that the results from this calculator are estimates based on the inputs provided. Actual EPF balances can vary due to factors such as changes in contribution rates, interest rates declared by EPFO, and any withdrawals made during the service period.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>The employer contribution rate used in this calculator is a simplified representation. The actual contribution is split between EPS and EPF.</li>
          <li>The interest rate is assumed to be constant throughout the service period, which may not be the case in reality.</li>
          <li>This calculator does not account for any withdrawals or advances you might take from your EPF account.</li>
          <li>For accurate information about your EPF account, please refer to the official EPFO portal or your employer's records.</li>
        </ul>
      </div>
    </div>
  );
};

export default EPFCalculator;