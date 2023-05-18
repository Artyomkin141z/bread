import styles from '../../styles/pages/categories.module.scss'

import MenuComponent from "@/components/global/menu";

export default function ProductsLayout({ children }) {
    return (
        <section className={styles.container}>
            <MenuComponent />
            { children }
        </section>
    )
}