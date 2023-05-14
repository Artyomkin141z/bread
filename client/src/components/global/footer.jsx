import Image from 'next/image'
import styles from '../../styles/components/global/footer.module.scss'

import vk from '../../../public/image/global/vk.svg'
import telegram from '../../../public/image/global/telegram.svg'
import instagram from '../../../public/image/global/instagram.svg'

import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <footer>
                <nav>
                    <ul>
                        <h3>Компания</h3>
                        <li><Link href='#'>О нас</Link></li>
                        <li><Link href='#'>Контакты</Link></li>
                        <li><Link href='#'>Новости</Link></li>
                        <li><Link href='#'>Вакансии</Link></li>
                        <li><Link href='#'>Награды</Link></li>
                    </ul>
                    <ul>
                        <h3>Продукция</h3>
                        <li><Link href='#'>Хлеба</Link></li>
                        <li><Link href='#'>Булочная и сдобная продукция</Link></li>
                        <li><Link href='#'>Печенье</Link></li>
                        <li><Link href='#'>Пирожные и слоёные изделия</Link></li>
                        <li><Link href='#'>Сладости мучные</Link></li>
                    </ul>
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