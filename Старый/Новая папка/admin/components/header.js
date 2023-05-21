import styles from '../styles/header.module.css';

import logo from '../public/image/logo.png';
import notification from '../public/image/notification.png';
import profile from '../public/image/profile.png';

import Image from 'next/image';

export default function Header(){
    return(
    <div className={styles.header}>
        <a className={styles.logo} href='/'>
            <Image src={logo} alt='logo' width='40' height='40'/>
            <p>Sneacker</p>
        </a>
        <div className={styles.profile}>
            <Image src={notification} alt='Уведомление' width='25' height='25'/>
            <Image className={styles.user} src={profile} alt='Уведомление' width='40' height='40'/>
        </div>
    </div>
    )
}