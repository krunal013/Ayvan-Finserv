import React from "react";
import Banner from "./Eqbanner"
import Faq from "./Eqfaq"
import Hero from './Eqhero'
import Clac from '../../EMICalculator'
import Benifits from './Eqbanifits'
import Why from "./WhyMutual";

const Eq = () => {
    return (
        <>
            
            <Banner />
            <Hero />
            
            
            <Benifits />
            <Why/>
            <Faq />
        </>
  );
};
export default Eq;