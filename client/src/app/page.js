import CarouselItemsComponent from '@/components/widget/CarouselItemsComponent/CarouselItemsComponent';
import MapComponent from '@/components/widget/MapComponent/MapComponent';
import SliderComponent from '@/components/widget/SliderComponent/SliderComponent'
import Image from 'next/image'

import { get15Products, getSlider } from '@/utils/data.server.request';

const sliders = {
  data: [
    {
      id: 1,
      img: 'http://polhlebz.by/thumb/2/j8jciTc7AIOe4a_5xVzZeQ/580c251/d/bezymyannyj.jpg',
      url: null,
    },
    {
      id: 2,
      img: 'http://polhlebz.by/thumb/2/65VEYlztJ5kQdJjr1vcHQw/580c251/d/bezymyannyj3_1.jpg',
      url: null,
    },
    {
      id: 3,
      img: 'http://polhlebz.by/thumb/2/uwg17HL2ue65M5XYZbj-uA/580c251/d/bezymyannyj2.jpg',
      url: null,
    },
    {
      id: 4,
      img: 'http://polhlebz.by/thumb/2/pYxhcYfb6D3pPUSMFZDmwg/580c251/d/bezymyannyj1.jpg',
      url: null,
    },
  ]
}

const newItems = [
  {
    id: '1',
    img: 'https://www.erase.bg/80e43fee-65e2-4c52-8cd8-dee904322c57',
    title: 'Название продукта',
  },
  {
    id: '2',
    img: 'https://www.erase.bg/80e43fee-65e2-4c52-8cd8-dee904322c57',
    title: 'Название продукта',
  },
  {
    id: '3',
    img: 'https://www.erase.bg/80e43fee-65e2-4c52-8cd8-dee904322c57',
    title: 'Название продукта',
  },
  {
    id: '4',
    img: 'https://www.erase.bg/80e43fee-65e2-4c52-8cd8-dee904322c57',
    title: 'Название продукта',
  },
  {
    id: '5',
    img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
    title: 'Название продукта',
  },
  {
    id: '6',
    img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
    title: 'Название продукта',
  },
  {
    id: '7',
    img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
    title: 'Название продукта',
  },
  {
    id: '8',
    img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
    title: 'Название продукта',
  },
  {
    id: '9',
    img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
    title: 'Название продукта',
  },
]

export default async function Home() {
  const slider = await getSlider();
  const products = await get15Products();
  // console.log(products.data);

  return (
    <div>
      <SliderComponent
        adminHost={process.env.HOST_ADMIN_PANEL}
        slider={slider.data.attributes}
      />
      <CarouselItemsComponent 
        products={products.data}
        title='Наша продукция'
        linkText='Все товары'
        link='/products'
      />
      {/* <CarouselItemsComponent 
        items={newItems}
        title='Новости'
        linkText='Все новости'
      /> */}
      <MapComponent />
    </div>
  )
}
