"use client"
import styles from './CarouselItemsComponent.module.scss'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import { useRef, useCallback } from 'react';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Product from '@/components/products/product';
import { host } from '@/utils/data.client.request';

export default function CarouselItemsComponent({ products, title, linkText, link }) {
    const swiperRef = useRef(null);
    // console.log(products)

    const handlePrevClick = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    }, [])

    const handleNextClick = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    }, [])

    const swiperSlides = products.map((item, i) => {
        return <SwiperSlide key={i} className={styles.slide}>
            <Product 
                id={item.id}
                title={item.attributes.title}
                image={item.attributes.image.data.attributes}
                packages={item.attributes.package}
                host={host}
            />
        </SwiperSlide>
    })

    return (
        <div className={styles.carouselItemsComponent}>
            <header>
                <div className={styles.title}>
                    <h3>{title}</h3>
                    <Link href={link}>{linkText}</Link>
                </div>
                <div className={styles.buttonContainer}>
                    <div
                        className={styles.button}
                        onClick={handlePrevClick}
                    >
                        <FiChevronLeft />
                    </div>
                    <div
                        className={styles.button}
                        onClick={handleNextClick}
                    >
                        <FiChevronRight />
                    </div>
                </div>
            </header>
            <Swiper
                className={styles.swiper}
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
            >
                {swiperSlides}
            </Swiper>
        </div>
    )
}