"use client"
import styles from './CarouselItemsComponent.module.scss'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import { useRef, useCallback } from 'react';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselItemsComponent({ items, title, linkText }) {
    const swiperRef = useRef(null);

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

    const swiperSlides = items.map((item, i) => {
        return <SwiperSlide key={i} className={styles.slide}>
            <Link href={item.id}>
                <img
                    src={item.img}
                    alt={item.title}
                />
            </Link>
            <Link href={item.id} className={styles.title}>
                {item.title}
            </Link>
        </SwiperSlide>
    })

    return (
        <div className={styles.carouselItemsComponent}>
            <header>
                <div className={styles.title}>
                    <h3>{title}</h3>
                    <Link href={'#'}>{linkText}</Link>
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