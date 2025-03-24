import React, { useEffect, useState } from "react";
import Banner from "./MutualBanner";
import Faq from "./MutualFaq";
import Hero from "./MutualHero";
import Clac from "../../SIPCalculator";
import Benifits from "./MutualBenifits";
import Why from "./WhyMutual";
import Other from "./OtherPlans";

const MutualFunds = () => {
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

      <Clac />

      <Other />
      <Faq />
    </>
  );
};
export default MutualFunds;