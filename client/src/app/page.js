import CarouselItems from '@/components/widget/itemsCarousel/itemsCarousel'
import SliderComponet from '@/components/widget/slider/slider'
import Image from 'next/image'

export default function Home() {

  const getSlides = () => {
    
  }

  return (
    <div>
      <SliderComponet />
      <CarouselItems />
      <CarouselItems />
    </div>
  )
}
