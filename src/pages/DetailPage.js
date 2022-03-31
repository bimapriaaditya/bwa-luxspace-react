import React from 'react'

import Header from '../parts/Header'
import Details from '../parts/DetailPage/Details'
import Suggestion from '../parts/DetailPage/Suggestion'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Aside from '../parts/Aside'
import Footer from '../parts/Footer'

export default function DetailPage() {
  return (
    <>
      <Header />

      <Breadcrumb 
        list={[
          {
            name: 'Home',
            link: '/'
          },
          {
            name: 'Office Room',
            link: '/categories/91231'
          },
          {
            name: 'Details',
            link: '/detail/714'
          }
        ]}
      />

      <Details />
      <Suggestion />
      
      <Aside />
      <Footer />
    </>
  )
}
