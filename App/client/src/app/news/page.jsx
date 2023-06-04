import styles from '../../styles/pages/news.module.scss'

import OneNews from "@/components/news/oneNews";
import { getNews } from "@/utils/data.server.request"

export const metadata = {
    title: 'Новости предприятия',
};

export default async function NewsPage() {
    const res = await getNews();
    const news = res.data;

    const renderNews = () => {
        return news.map(item => {
            return <OneNews
                item={item}
            />
        })
    }

    return (
        <>
            <header className={styles.header}>
                <h1>Новости предприятия</h1>
            </header>
            <div className={styles.gridNews}>
                {renderNews()}
            </div>
        </>
    )
}