import React from 'react'

import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'
import Aside from '../parts/Aside'
import Footer from '../parts/Footer'

export default function Cart() {
  return (
    <>
      <Header />
      <Breadcrumb list={[
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Shopping Cart',
          link: '/cart'

        },
      ]} />

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <Aside />
      <Footer />
    </>

  )
}
