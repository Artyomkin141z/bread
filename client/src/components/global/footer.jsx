import Image from 'next/image'
import styles from '../../styles/components/global/footer.module.scss'

import vk from '../../../public/image/global/vk.svg'
import telegram from '../../../public/image/global/telegram.svg'
import instagram from '../../../public/image/global/instagram.svg'

import Link from 'next/link'
import { getMenu } from '@/utils/data.server.request'

export default async function Footer(data) {
    const menu = await getMenu();

    const renderMenu = (items) => {
        let products;
        return (
            <>
                <ul>
                    <h3><Link href='/'>Компания</Link></h3>
                    {items.map(item => {
                        if (item.path !== '/products') {
                            return (
                                <li key={item.id}>
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            )
                        }
                        else {
                            products = item;
                        }
                    })}
                </ul>
                <ul>
                    <h3><Link href={products.path}>{products.title}</Link></h3>
                    {products.items.map(item => {
                        return (
                            <li key={item.id}>
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </>
        )

    }

    return (
        <div className={styles.footer}>
            <footer>
                <nav>
                    {renderMenu(menu)}
                    <ul>
                        <h3>Официальные ссылки</h3>
                        <li><Link href='#'>Президент Республики Беларусь</Link></li>
                        <li><Link href='#'>Министерство сельского хозяйства и продовольствия</Link></li>
                        <li><Link href='#'>Сайт города Новополоцка</Link></li>
                        <li><Link href='#'>ОАО «Витебскхлебпром»</Link></li>
                    </ul>
                    <div className={styles.feedback}>
                        <div className={styles.social}>
                            <h3>Мы в соц сетях</h3>
                            <div className={styles.images}>
                                <Image src={vk} alt='' />
                                <Image src={telegram} alt='' />
                                <Image src={instagram} alt='' />
                            </div>
                        </div>
                        <div className={styles.button}>Свзяться с нами</div>
                    </div>
                </nav>
                <div className={styles.imgLinks}>
                    <img src='http://www.novhleb.by/images/molodezhnoj.jpg' alt='Новополоцк молодежная столица' />
                    <img src='http://www.novhleb.by/images/bird.jpg' alt='Год мира и созедания' />
                </div>
                <div className={styles.cop}>
                    <p>
                        © 2023 Закрытое акционерное общество «Интернет-магазин Евроопт». Все права защищены. Зарегистрировано решением Минского районного исполнительного комитета от 09.06.2014 г.
                        в Едином государственном регистре юридических лиц и индивидуальных предпринимателей. Свидетельство о государственной регистрации №691536217. УНП 691536217,
                        место нахождения: 220019 Минская область, Минский район, Щомыслицкий с/с, Западный промузел ТЭЦ-4, кабинет 229. Почтовый адрес ЗАО «Интернет-магазин Евроопт»:
                        220019, г. Минск, а/я 19. Онлайн-гипермаркет edostavka.by. Режим работы: круглосуточно. Дата регистрации в Торговом реестре: 24.10.2014 г.
                        Адрес электронной почты: info@e-dostavka.by
                    </p>
                    <p>Способы оплаты товара и доставки: 1) наличными денежными средствами экспедитору; 2) банковской пластиковой карточкой экспедитору; 3)
                        банковской пластиковой карточкой в режиме «онлайн»; 4) безналичный расчет по счету. Способы доставки товара: 1) транспортным средством продавца; 2)
                        из пункта выдачи заказов.</p>
                </div>
            </footer>
        </div>
    )
}