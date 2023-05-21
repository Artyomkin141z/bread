import styles from '../styles/menu.module.css'

import Link from 'next/link'

export default function Menu() {
    //gtf
    return (
    <div className={styles.menu}>
        <div className={styles.container}>
            <h3>Главная</h3>
            <ul>
                <li>Авторизация</li>
                <li><Link href='/product'>Товары</Link></li>
                <li><Link href='/categories'>Категории</Link ></li>
                <li>Метки</li>
                <li>Бренд</li>
                <li>Клиента</li>
                <li>Заказы</li>
            </ul>
        </div>
    </div>
    )
}