import React from 'react'

import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Success from '../parts/Success'
import Aside from '../parts/Aside'
import Footer from '../parts/Footer'

export default function SuccessPage() {
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
            name: 'Success Checkout',
            link: '/success'
          },
        ]}
      />
      <Success />
      <Aside />
      <Footer />

    </>
  )
}
