import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalculator,
  faChartLine,
  faPiggyBank,
  faHome,
  faBuildingColumns,
  faFileInvoiceDollar,
  faMoneyBillTransfer,
} from '@fortawesome/free-solid-svg-icons';

const FinanceCard = ({ icon, title, description, buttonText, onClick }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden mt-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-100 text-blue-500 mx-auto mb-4">
          {icon ? (
            <FontAwesomeIcon icon={icon} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faCalculator} size="lg" />
          )}
        </div>
        <h3 className="mt-2 text-gray-800 text-xl font-semibold text-center">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm text-center">{description}</p>
      </div>
      <div className="px-6 py-4 text-center">
        <button
          onClick={onClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  },);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10 pt-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finance Calculator</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 max-w-7xl w-full">
        <FinanceCard
          icon={faChartLine}
          title="SIP Calculator"
          description="Plan your Systematic Investment Plan (SIP) and estimate returns."
          buttonText="SIP Calculator"
          onClick={() => navigate('/SIPCalculator')}
        />
        <FinanceCard
          icon={faCalculator}
          title="EMI Calculator"
          description="Calculate the Equated Monthly Installment (EMI) for loans."
          buttonText="EMI Calculator"
          onClick={() => navigate('/emi-calculator')}
        />
        <FinanceCard
          icon={faPiggyBank}
          title="FD Calculator"
          description="Calculate the maturity amount for your Fixed Deposit (FD)."
          buttonText="FD Calculator"
          onClick={() => navigate('/fd-calculator')}
        />
        <FinanceCard
          icon={faHome}
          title="Lumpsum Calculator"
          description="Calculate the maturity amount for a lumpsum investment."
          buttonText="Lumpsum Calculator"
          onClick={() => navigate('/lumpsum-calculator')}
        />
        <FinanceCard
          icon={faBuildingColumns}
          title="EPF Calculator"
          description="Estimate the maturity amount of your Employee Provident Fund (EPF)."
          buttonText="EPF Calculator"
          onClick={() => navigate('/epf-calculator')}
        />
        <FinanceCard
          icon={faFileInvoiceDollar}
          title="PPF Calculator"
          description="Calculate the maturity amount of your Public Provident Fund (PPF)."
          buttonText="PPF Calculator"
          onClick={() => navigate('/ppf-calculator')}
        />
        <FinanceCard
          icon={faMoneyBillTransfer}
          title="SWP Calculator"
          description="Plan your Systematic Withdrawal Plan (SWP) and estimate payouts."
          buttonText="SWP Calculator"
          onClick={() => navigate('/swp-calculator')}
        />
      </div>
    </div>
  );
};

export default App;