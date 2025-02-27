import React from "react";
import Banner from "./FDBanner"
import Faq from "./FDFaq"
import Hero from './FDHero'
import Clac from '../../EMICalculator'
import Benifits from './FDBenifits'
import Other from "./OtherPlans";
import Why from "./WhyMutual";

const Fixed = () => {
    return (
        <>
            
            <Banner />
            <Hero />
            <Why/>
            <Benifits />
            <Other/>
            <Faq />
            
        </>
  );
};
export default Fixed;