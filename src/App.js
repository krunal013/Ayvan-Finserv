// App.js
import { ThemeProvider } from "next-themes";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { About } from "./components/About";
import GeneralInsurance from "./components/GeneralInsurance";
import Contact from "./components/Contact"; // No curly braces
import Lifeinsurance from "./components/Lifeinsurance";
import Healthinsurance from "./components/Healthinsurance";
import MutualFund from "./components/investment/MutualFunds/MutualFunds";
import Fixed from "./components/investment/FD/Fixed";
import Eq from "./components/investment/Equity/Eq";
import { SignIn } from "./components/SignIn";
import Footer from "./components/Footer";
import Risk from"./components/investment/others/Risk";
import Port from"./components/investment/portfolio/Port";
import Claim from"./components/investment/claimadvisiory/Claim";
import SignUp from "./components/SignUp";
import PricingBox from "./components/PricingBox";
import Services from "./components/Services";
import VerifyOTP from "./components/VerifyOTP";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomePage from "./components/WelcomePage";
import WealthManagement from "./components/WealthManagement";

function App() {
  const appStyle = {
    // backgroundColor: 'bg', // Dynamically controlled by CSS variables
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <ThemeProvider attribute="class">
      <Router>
        <AuthProvider>
          <div style={appStyle}>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/GeneralInsurance" element={<GeneralInsurance />} />
              <Route path="/Lifeinsurance" element={<Lifeinsurance />} />
              <Route path="/Healthinsurance" element={<Healthinsurance />} />
              <Route path="/MutualFund" element={<MutualFund />} />
              <Route path="/Fixed" element={<Fixed />} />
              <Route path="/Eq" element={<Eq />} />
              <Route path="/Risk" element={<Risk />} />
              <Route path="/Port" element={<Port />} />
              <Route path="/Claim" element={<Claim />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />{" "}
              {/* Fix Contact Route */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/verify-otp/:userId" element={<VerifyOTP />} />
              {/* Protected Route */}
              <Route
                path="/welcome"
                element={<ProtectedRoute element={<WelcomePage />} />}
              />
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
