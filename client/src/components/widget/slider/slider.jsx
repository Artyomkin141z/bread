"use client"
import './style.css'

import React, { useState } from 'react';
import Image from 'next/image';

import AliceCarousel from 'react-alice-carousel';


export default function SliderComponet({ data }) {
    const slides = [
        {
            img: 'http://polhlebz.by/thumb/2/j8jciTc7AIOe4a_5xVzZeQ/580c251/d/bezymyannyj.jpg',
            url: '',
        },
        {
            img: 'http://polhlebz.by/thumb/2/65VEYlztJ5kQdJjr1vcHQw/580c251/d/bezymyannyj3_1.jpg',
            url: '',
        },
        {
            img: 'http://polhlebz.by/thumb/2/uwg17HL2ue65M5XYZbj-uA/580c251/d/bezymyannyj2.jpg',
            url: '',
        },
        {
            img: 'http://polhlebz.by/thumb/2/pYxhcYfb6D3pPUSMFZDmwg/580c251/d/bezymyannyj1.jpg',
            url: '',
        },
    ]

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img key={0} src="http://polhlebz.by/thumb/2/j8jciTc7AIOe4a_5xVzZeQ/580c251/d/bezymyannyj.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img key={1} src="http://polhlebz.by/thumb/2/65VEYlztJ5kQdJjr1vcHQw/580c251/d/bezymyannyj3_1.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img key={2} src="http://polhlebz.by/thumb/2/uwg17HL2ue65M5XYZbj-uA/580c251/d/bezymyannyj2.jpg" onDragStart={handleDragStart} role="presentation" />,
    ];

    return [
        <AliceCarousel
            key={'aliceCarousel'}
            items={items}
            mouseTracking
            autoPlay
            autoPlayInterval={4000}
            animationDuration={1000}
            autoPlayStrategy={'action'}
            infinite
        />
    ]
}

export async function getServerSideProps(context) {
    let slides;
    const setData = (data) =>{
        slides = data;
    }

    fetch('http://localhost:1337/api/slider')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    return {
        props: { data }
    };
}