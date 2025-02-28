import React from "react";
import Banner from "./Claimbanner"
import Faq from "./Claimfaq"
import Hero from './Claimhero'

import Benifits from './Claimbanifits'
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