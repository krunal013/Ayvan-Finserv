import React, { useEffect, useState } from "react";
import Banner from "./FDBanner";
import Faq from "./FDFaq";
import Hero from './FDHero';
import Clac from '../../SIPCalculator';
import Benifits from './FDBenifits';
import Other from "./OtherPlans";
import Why from "./WhyMutual";

const Fixed = () => {
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
export default Fixed;