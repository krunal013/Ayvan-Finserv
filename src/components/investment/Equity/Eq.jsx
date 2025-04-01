import React, { useEffect, useState } from "react";
import Banner from "./Eqbanner";
import Faq from "./Eqfaq";
import Hero from './Eqhero';
import Clac from '../../SIPCalculator';
import Benifits from './Eqbanifits';
import Why from "./WhyMutual";
import Other from"./OtherPlans";

const Eq = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  },);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <Banner />
      <Hero />
      <Why />
      <Benifits />
      <Other />
      <Faq />
    </>
  );
};
export default Eq;