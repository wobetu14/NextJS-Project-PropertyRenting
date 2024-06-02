import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { HomeProperties } from '@/components/HomeProperties'
import InfoBoxes from '@/components/InfoBoxes'
import connectDB from '@/config/database'
import React from 'react'

const HomePage = async () => {
  await connectDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  )
}

export default HomePage