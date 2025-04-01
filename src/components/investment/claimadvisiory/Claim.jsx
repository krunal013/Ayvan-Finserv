import React, { useEffect, useState } from "react";
import Banner from "./Claimbanner";
import Faq from "./Claimfaq";
import Hero from './Claimhero';
import Benifits from './Claimbanifits';
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