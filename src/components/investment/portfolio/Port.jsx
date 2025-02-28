import React from "react";
import Banner from "./Portbanner"
import Faq from "./Portfaq"
import Hero from './Porthero'

import Benifits from './Portbanifits'
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