import CarouselItemsComponent from '@/components/widget/CarouselItemsComponent/CarouselItemsComponent';
import MapComponent from '@/components/widget/MapComponent/MapComponent';
import SliderComponent from '@/components/widget/SliderComponent/SliderComponent'
import Image from 'next/image'

import { get15Products, getSlider } from '@/utils/data.server.request';
import NewsWidget from '@/components/widget/News/NewsWidget';



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
      <NewsWidget />
      <MapComponent />
    </div>
  )
}
