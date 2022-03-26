import React from 'react'

import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrived from '../parts/HomePage/JustArrived'
import Clients from '../parts/Clients'
import Aside from '../parts/Aside'
import Footer from '../parts/Footer'

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Aside />
      <Footer />
    </>
  )
}