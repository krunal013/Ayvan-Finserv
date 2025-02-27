import React from "react";
import Banner from "./Eqbanner"
import Faq from "./Eqfaq"
import Hero from './Eqhero'
import Clac from '../../EMICalculator'
import Benifits from './Eqbanifits'
import Why from "./WhyMutual";
import Other from"./OtherPlans";

const Eq = () => {
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
export default Eq;