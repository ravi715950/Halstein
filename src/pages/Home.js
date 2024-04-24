import React from 'react'
import Slider from '../components/homepage/banner/Slider';
import Features from '../components/homepage/features/Features';
import BusinessServies from '../components/homepage/businessServies/BusinessServies';
import Applynow from '../components/homepage/applynow/Applynow';
import About from '../components/about-breif/About';



function Home() {
  return (
    <>
    <Slider/>
    <About title1= "From strategy to delivery, we are here"
      title2 ="to make sure your business"
      title3 = " endeavor succeeds. Trust our experts."
      ceo="ALEX LEE, CEO"
      />
      <Features/>
      <BusinessServies/>
      <Applynow/>
      
    </>
  )
}

export default Home;