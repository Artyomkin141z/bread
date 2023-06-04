import Link from 'next/link';
import styles from './styles.module.scss'

import { getWidgetNews } from "@/utils/data.server.request";
import OneNews from '@/components/news/oneNews';

export default async function NewsWidget() {
    const news = await getWidgetNews();
    // console.log('news 1222:', news)

    const renderNews = () => {
        return news.data.map(item => {
            return (
                <OneNews 
                    item = {item}
                />
            )
        })
    }

    return (
        <div className={styles.newsContainer}>
            <header>
                <h2>Новости</h2>
                <Link href='/news'>Все новости предприятия</Link>
            </header>
            <div className={styles.news}>
                {renderNews()}
            </div>
        </div>
    )
}