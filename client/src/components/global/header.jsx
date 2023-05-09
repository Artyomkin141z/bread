import styles from '../../styles/components/global/header.module.scss'
import logo from '../../../public/image/global/small-logo.svg'

import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <h4>Полоцкий хлебозавод, Филиал <Link href='http://vhp.by/'>{'ОАО "Витебскхлебпром"'}</Link> </h4>
                <div>
                    <h4>Контакты</h4>
                    <h4><Link href=''>Ру</Link></h4>
                    <h4><Link href=''>Бел</Link></h4>
                </div>
            </div>
            <header>
                <Link href='/' className={styles.logo}>
                    <Image className={styles.img} src={logo} alt='Полоцкий хлебозавод'/>
                    <h1 className={styles.logoName}>Полоцкий хлебозавод</h1>
                </Link>
                <nav>
                    <Link href='/' >О нас</Link>
                    <Link href='/' >Продукция</Link>
                    <Link href='/' >Новости</Link>
                </nav>
            </header>
        </div>
    )
}