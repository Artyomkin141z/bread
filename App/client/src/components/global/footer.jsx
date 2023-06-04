import Image from 'next/image'
import styles from '../../styles/components/global/footer.module.scss'

import vk from '../../../public/image/global/vk.svg'
import telegram from '../../../public/image/global/telegram.svg'
import instagram from '../../../public/image/global/instagram.svg'

import Link from 'next/link'
import { getCop, getMenu, getOfficialLinks } from '@/utils/data.server.request'
import HTMLReactParser from 'html-react-parser'
import Feedback from './feedvack'

export default async function Footer() {
    const menu = await getMenu();
    const officialLinks = await getOfficialLinks();
    const cop = await getCop();

    // console.log(cop)

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

    const renderLinks = (links) => {
        return (
            <ul>
                <h3>{links.title}</h3>
                {
                    links.links.map(link => {
                        return <li key={link.id}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    })
                }
            </ul>
        )
    }

    const renderSocialLinks = (links) => {
        return (
            <div className={styles.images}>
                {links.map(link => {
                    return (
                        <Link href={link.url} key={link.id}>
                            <Image
                                src={`${process.env.HOST_ADMIN_PANEL}${link.image.data.attributes.url}`}
                                alt={link.title}
                                width={link.image.data.attributes.width}
                                height={link.image.data.attributes.height}
                            />
                        </Link>
                    )
                })}
            </div>
        )
    }

    const renderImageLinks = (links) => {
        return (
            <div className={styles.imgLinks}>
                {links.map(link => {
                    if (link.url !== null) {
                        return <Link href={link.url} key={link.id}>
                            <Image
                                src={`${process.env.HOST_ADMIN_PANEL}${link.image.data.attributes.url}`}
                                alt={link.title}
                                width={link.image.data.attributes.width}
                                height={link.image.data.attributes.height}
                            />
                        </Link>
                    }
                    else {
                        return <Image
                            key={link.id}
                            src={`${process.env.HOST_ADMIN_PANEL}${link.image.data.attributes.url}`}
                            alt={link.title}
                            width={link.image.data.attributes.width}
                            height={link.image.data.attributes.height}
                        />
                    }
                })}
            </div>
        )
    }

    return (
        <div className={styles.footer}>
            <footer>
                <nav>
                    {renderMenu(menu)}
                    {renderLinks(officialLinks.data.attributes)}
                    <div className={styles.feedback}>
                        <div className={styles.social}>
                            <h3>Мы в соц сетях</h3>
                            <div className={styles.images}>
                                {renderSocialLinks(officialLinks.data.attributes.socials)}
                            </div>
                        </div>
                        <Feedback />
                        {/* <div className={styles.button}>Свзяться с нами</div> */}
                    </div>
                </nav>
                {renderImageLinks(officialLinks.data.attributes.imageLinks)}
                <div className={styles.cop}>
                    {HTMLReactParser(cop.data.attributes.cop)}
                </div>
            </footer>
        </div>
    )
}