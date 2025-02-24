import React from "react";
import Banner from "./FDBanner"
import Faq from "./FDFaq"
import Hero from './FDHero'
import Clac from '../../EMICalculator'
import Benifits from './FDBenifits'

const Fixed = () => {
    return (
        <>
            
            <Banner />
            <Hero />
            {/* <Clac /> */}
            <Benifits />
            <Faq />
        </>
  );
};
export default Fixed;