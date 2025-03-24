import React, { useEffect, useState } from "react";
import Banner from "./Riskbanner";
import Faq from "./Riskfaq";
import Hero from './Riskhero';
import Benifits from './Riskbanifits';
import Why from "./WhyMutual";
import Other from"./OtherPlans";

const Risk = () => {
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
export default Risk;