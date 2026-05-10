import AboutSection from '@/components/HomePage/AboutSection'
import CampusSection from '@/components/HomePage/CampusSection'
import Carousel from '@/components/HomePage/Carousel'
import ContactSection from '@/components/HomePage/ContactSection'
import DirectorsMessageSection from '@/components/HomePage/DirectorsMessageSection'
import HeroSection from '@/components/HomePage/HeroSection'
import PromoVideo from '@/components/HomePage/PromoVideo'
import TestimonialsSlider from '@/components/HomePage/TestimonialsSlider'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    
    <HeroSection/>
    <PromoVideo/>
    <AboutSection/>
    {/* <Carousel/> */}
    <CampusSection/>
    <DirectorsMessageSection/>
    <TestimonialsSlider/>
    <ContactSection/>
   
    </>
  )
}

export default page