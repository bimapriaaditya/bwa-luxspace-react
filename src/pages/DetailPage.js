import React from 'react'

import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Clients from '../parts/Clients'
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

      <div>
        <p className='py-5 px-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur accusamus, quam autem exercitationem laborum odit mollitia excepturi, quod veniam cumque sed officiis, perspiciatis ad quos quas impedit molestiae voluptatum aliquam ipsa! Deleniti eum repudiandae ratione provident, quisquam nam nostrum assumenda magni, mollitia nisi distinctio fugiat iste vitae. Facere accusantium, numquam porro quia alias tempore dolores, officiis non nemo fuga maxime molestiae et adipisci delectus itaque quos, reprehenderit labore distinctio. Maxime voluptatum odio error deserunt. Aspernatur quos sed, fuga ea, eos, accusantium ab molestias ipsa consequuntur pariatur numquam. Vel omnis aperiam quibusdam temporibus consequuntur corporis fuga facere iusto eveniet possimus odio voluptate deleniti fugiat itaque ut provident cum, nostrum, veniam suscipit accusantium modi dolores nisi? Nam suscipit quo consequuntur ad recusandae, amet, iste officiis expedita quia repellendus quos in illo eius ipsum, accusantium quas hic ipsa. Architecto voluptatem nihil quas corrupti expedita exercitationem vel eos eligendi molestias a, minus laborum aliquid quo explicabo autem harum qui iusto quod tempora ab dicta asperiores! Praesentium nihil corporis possimus hic molestiae sunt dolorem doloribus quo officia tempora eos alias aperiam porro, beatae suscipit libero ipsa natus sequi. Aut doloribus consequatur autem dolore dignissimos similique asperiores magni optio accusantium corrupti, nam, porro quibusdam. Officia alias doloribus, repudiandae tempore cum omnis minus. Quo repudiandae, officia, distinctio iusto nihil iure fugit vero labore voluptatem dolores similique! Consequatur eveniet autem magni quidem repudiandae eum dolorem quasi assumenda maxime quos quo veritatis dolorum, reiciendis ducimus, in illo quisquam sint, aliquid sequi! Iure numquam tempore quo optio! Provident, inventore?
        </p>
        <p className='py-5 px-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur accusamus, quam autem exercitationem laborum odit mollitia excepturi, quod veniam cumque sed officiis, perspiciatis ad quos quas impedit molestiae voluptatum aliquam ipsa! Deleniti eum repudiandae ratione provident, quisquam nam nostrum assumenda magni, mollitia nisi distinctio fugiat iste vitae. Facere accusantium, numquam porro quia alias tempore dolores, officiis non nemo fuga maxime molestiae et adipisci delectus itaque quos, reprehenderit labore distinctio. Maxime voluptatum odio error deserunt. Aspernatur quos sed, fuga ea, eos, accusantium ab molestias ipsa consequuntur pariatur numquam. Vel omnis aperiam quibusdam temporibus consequuntur corporis fuga facere iusto eveniet possimus odio voluptate deleniti fugiat itaque ut provident cum, nostrum, veniam suscipit accusantium modi dolores nisi? Nam suscipit quo consequuntur ad recusandae, amet, iste officiis expedita quia repellendus quos in illo eius ipsum, accusantium quas hic ipsa. Architecto voluptatem nihil quas corrupti expedita exercitationem vel eos eligendi molestias a, minus laborum aliquid quo explicabo autem harum qui iusto quod tempora ab dicta asperiores! Praesentium nihil corporis possimus hic molestiae sunt dolorem doloribus quo officia tempora eos alias aperiam porro, beatae suscipit libero ipsa natus sequi. Aut doloribus consequatur autem dolore dignissimos similique asperiores magni optio accusantium corrupti, nam, porro quibusdam. Officia alias doloribus, repudiandae tempore cum omnis minus. Quo repudiandae, officia, distinctio iusto nihil iure fugit vero labore voluptatem dolores similique! Consequatur eveniet autem magni quidem repudiandae eum dolorem quasi assumenda maxime quos quo veritatis dolorum, reiciendis ducimus, in illo quisquam sint, aliquid sequi! Iure numquam tempore quo optio! Provident, inventore?
        </p>
      </div>
      
      <Clients />
      <Aside />
      <Footer />
    </>
  )
}
