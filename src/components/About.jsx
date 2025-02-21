import React from 'react'
import Breadcrumb from './Breadcrumb'
import AboutSectionOne from './AboutSectionOne'
import AboutSectionTwo from './AboutSectionTwo'
import Plan from './Plan'
import Message from './Message'
import Who from './Who'
import States from './States'
import List from './List'
export const About = () => {
  return (
    <div>
      <Breadcrumb/>
      <AboutSectionOne/>
      <Who/>
      <AboutSectionTwo/>
      <Plan/>
     <Message/>
     <States/>
     <List/>
    
     
    </div>
  )
}
