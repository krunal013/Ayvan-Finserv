import React from "react";
import Banner from "./MutualBanner";
import Faq from "./MutualFaq";
import Hero from "./MutualHero";
import Clac from "../../EMICalculator";
import Benifits from "./MutualBenifits";
import Why from "./WhyMutual";
import Other from "./OtherPlans";

const MutualFunds = () => {
  return (
    <>
      <Banner />
      <Hero />
     <Why />
      <Benifits />
     
      <Clac />
      
      <Other />
      <Faq />
    </>
  );
};
export default MutualFunds;
