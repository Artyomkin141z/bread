import styles from '../../styles/components/preloaders/preloaders.module.scss'

export default function TitleProductsPreloader() {
    return (
        <div className={styles.titlePreloaders}>
            <div className={styles.h1}></div>
            <div className={styles.baner}></div>
        </div>
    )
}