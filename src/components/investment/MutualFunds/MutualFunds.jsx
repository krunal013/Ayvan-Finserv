import React from "react";
import Banner from "./MutualBanner"
import Faq from "./MutualFaq"
import Hero from './MutualHero'
import Clac from '../../EMICalculator'
import Benifits from './MutualBenifits'

const MutualFunds = () => {
    return (
        <>
            
            <Banner />
            <Hero />
            <Clac />
            <Benifits />
            <Faq />
        </>
  );
};
export default MutualFunds;