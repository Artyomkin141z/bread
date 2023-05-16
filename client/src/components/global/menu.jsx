'use client'
import styles from '../../styles/components/dynamicPage/menu.module.scss'

import { getMenu, getMenuItem } from '@/utils/data.client.request';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function MenuComponent() {
    const pathname = usePathname();
    const { menu, getMenuIsLoading, getMenuIsError } = getMenu();

    console.log(menu)


    const renderMenu = (items) => {
        return (
            <ul>
                {items.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={item.path == pathname || pathname.includes(item.path) ? styles.active : ''}
                        >
                            <Link href={item.path}>{item.title}</Link>
                            {item.items.length ? renderMenu(item.items) : ''}
                        </li>
                    )
                })}
            </ul>
        )
    }

    if (getMenuIsLoading) {
        return (<div>
            Загрузка
        </div>)
    }

    return (
        <nav className={styles.nav}>
            {renderMenu(menu)}
        </nav>
    )
}