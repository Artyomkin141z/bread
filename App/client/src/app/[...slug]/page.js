import ContentComponent from '@/components/global/content';
import styles from '../../styles/pages/dynamic.module.scss'

import MenuComponent from "@/components/global/menu";

export default function DynamicPages() {

    return (
        <div className={styles.page}>
            <MenuComponent />
            <ContentComponent />
        </div>
    )
}