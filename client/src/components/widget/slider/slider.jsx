"use client"
// import './style.css'

// import React, { useState } from 'react';
// import Image from 'next/image';

// import AliceCarousel from 'react-alice-carousel';


// export default function SliderComponet({ sliders, adminHost }) {
//     console.log(sliders)
//     const slides = [
//         {
//             img: 'http://polhlebz.by/thumb/2/j8jciTc7AIOe4a_5xVzZeQ/580c251/d/bezymyannyj.jpg',
//             url: '',
//         },
//         {
//             img: 'http://polhlebz.by/thumb/2/65VEYlztJ5kQdJjr1vcHQw/580c251/d/bezymyannyj3_1.jpg',
//             url: '',
//         },
//         {
//             img: 'http://polhlebz.by/thumb/2/uwg17HL2ue65M5XYZbj-uA/580c251/d/bezymyannyj2.jpg',
//             url: '',
//         },
//         {
//             img: 'http://polhlebz.by/thumb/2/pYxhcYfb6D3pPUSMFZDmwg/580c251/d/bezymyannyj1.jpg',
//             url: '',
//         },
//     ]

//     const handleDragStart = (e) => e.preventDefault();

//     const items2 = [
//         <img key={0} src="http://polhlebz.by/thumb/2/j8jciTc7AIOe4a_5xVzZeQ/580c251/d/bezymyannyj.jpg" onDragStart={handleDragStart} role="presentation" />,
//         <img key={1} src="http://polhlebz.by/thumb/2/65VEYlztJ5kQdJjr1vcHQw/580c251/d/bezymyannyj3_1.jpg" onDragStart={handleDragStart} role="presentation" />,
//         <img key={2} src="http://polhlebz.by/thumb/2/uwg17HL2ue65M5XYZbj-uA/580c251/d/bezymyannyj2.jpg" onDragStart={handleDragStart} role="presentation" />,
//     ];

//     const items = sliders.map((item, i) => {
//         console.log(`${adminHost}${item.attributes.image.data.attributes.url}`)
//         if(item.attributes.url){

//         }
//         else{
//             return <img 
//                 key={i}
//                 src={`${adminHost}${item.attributes.image.data.attributes.url}`}
//                 // width={item.attributes.image.data.attributes.width}
//                 // height={item.attributes.image.data.attributes.height}
//                 alt=''
//             />
//         }
//     })

//     console.log(items2)

//     return [
//         <AliceCarousel
//             key={'aliceCarousel'}
//             items={items}
//             mouseTracking
//             autoPlay
//             autoPlayInterval={4000}
//             animationDuration={1000}
//             autoPlayStrategy={'action'}
//             infinite
//         />
//     ]
// }

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export default function SliderComponet(){
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};