import CarouselItems from '@/components/widget/itemsCarousel/itemsCarousel'
import SliderComponet from '@/components/widget/slider/slider'
import Image from 'next/image'

async function getSlides() {
  const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/sliders?populate=*`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const sliders = await getSlides();

  return (
    <div>
      <SliderComponet
        adminHost={process.env.HOST_ADMIN_PANEL}
        sliders={sliders.data}
      />
      {/* <CarouselItems />
      <CarouselItems /> */}
    </div>
  )
}
