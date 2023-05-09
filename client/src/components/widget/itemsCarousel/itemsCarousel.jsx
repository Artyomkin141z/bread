"use client"
import styles from './styles.module.scss'

import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const data = [
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
    {
        img: 'http://polhlebz.by/d/170351/d/b1400316502_6.jpg',
        title: 'Название продукта'
    },
]

const createItems = (data) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

    return data.map((item, i) => (
        <div
            key={i}
            data-value={i + 1}
            //className="item"
            onMouseDown={(e) => (deltaX = e.pageX)}
            onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
        >
            <img src={item.img} alt='' />
            <span>{item.title}</span>
        </div>
    ));
};

export default function CarouselItems() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems(data));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className={styles.swiper}>
            <header>
                <div className={styles.title}>
                    <h3>Новинки</h3>
                    <p>Вся продукция</p>
                </div>
                <div className={styles.buttons}>
                    <div onClick={slidePrev}><BiChevronLeft /></div>
                    <div onClick={slideNext}><BiChevronRight /></div>
                </div>
            </header>
            <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={items}
                activeIndex={activeIndex}
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
            />
        </div>
    )
};