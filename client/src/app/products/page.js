import MenuComponent from '@/components/global/menu';
import styles from '../../styles/pages/categories.module.scss'

import Link from "next/link";

export default function Categories() {
    return (
        <div className='page_container'>
            <h1>Наша продукция</h1>
            <div>
                <img src='https://api.static.edostavka.by/media/6450a87a623d2_c21248661-jde-belarus-jacobs-e-com-r-g-italiano-1608x186.jpg?id=14910' alt='' />
            </div>
            <section className={styles.categories}>
                <MenuComponent />
                {/* <nav>
                    <ul>
                        <h3>Категории</h3>
                        <li><Link href='#'>Все товары</Link></li>
                        <li><Link href='#'>Хлеба</Link></li>
                        <li><Link href='#'>Булочная и сдобная продукция</Link></li>
                        <li><Link href='#'>Печенье</Link></li>
                        <li><Link href='#'>Пирожные и слоёные изделия</Link></li>
                        <li><Link href='#'>Сладости мучные</Link></li>
                    </ul>
                </nav> */}
                <div className={styles.products}>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                    <div className={styles.product}>
                        <img src='http://www.novhleb.by/images/%d0%91%d1%83%d0%bb%d0%ba%d0%b0%20%d0%9c%d0%b0%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.jpg' alt='' />
                        <h3>Название</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}