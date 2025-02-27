import React from "react";
import Banner from "./Riskbanner"
import Faq from "./Riskfaq"
import Hero from './Riskhero'

import Benifits from './Riskbanifits'
import Why from "./WhyMutual";
import Other from"./OtherPlans";

const Risk = () => {
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
export default Risk;