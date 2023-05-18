import styles from '../../styles/components/preloaders/preloaders.module.scss'

export default function MenuPreloader(){
    return(
        <nav className={styles.menuPreloader}>
            <ul>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
                <li className={styles.li_menuPreloader}></li>
            </ul>
        </nav>
    )
}