import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';
import Plan from './Plan';
import Message from './Message';
import Who from './Who';
import States from './States';
import List from './List';
import Features from './Features';

export const About = () => {
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
    <div>
      {/* <Breadcrumb/> */}
      <AboutSectionOne />
      <Who />
      <AboutSectionTwo />
      {/* <Plan /> */}
      <Features />
      <Message />
      <States />
      <List />
    </div>
  );
};