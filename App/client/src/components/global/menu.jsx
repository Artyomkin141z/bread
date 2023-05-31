'use client'
import styles from '../../styles/components/dynamicPage/menu.module.scss'

import { getMenu } from '@/utils/data.client.request';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuPreloader from '../preloaders/menu';

export default function MenuComponent() {
    const pathname = usePathname();
    const { menu, getMenuIsLoading, getMenuIsError } = getMenu();

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
        return <MenuPreloader />
    }

    // console.log(menu)

    return (
        <nav className={styles.nav}>
            {renderMenu(menu)}
        </nav>
    )
}