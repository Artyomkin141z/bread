'use client'
import styles from '../../styles/components/global/header.module.scss'
import logo from '../../../public/image/global/logo.png'

import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const router = usePathname();

    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <h4>Новополоцкий хлебозавод, Филиал <Link href='http://vhp.by/'>{'ОАО "Витебскхлебпром"'}</Link> </h4>
                <div>
                    <h4>Контакты</h4>
                    <h4>Награды</h4>
                    <h4>Вакансии</h4>
                </div>
            </div>
            <div className={(scrollPosition > 40 || router.pathname === '/') ? styles.scrolled : ''}>
                <header>
                    <Link href='/' className={styles.logo}>
                        <Image className={styles.img} src={logo} alt='Полоцкий хлебозавод' />
                        <h1 className={styles.logoName}>Новополоцкий хлебозавод</h1>
                    </Link>
                    <nav>
                        <Link href='/' >О нас</Link>
                        <Link href='/' >Продукция</Link>
                        <Link href='/' >Новости</Link>
                    </nav>
                </header>
            </div>
        </div>
    )
}