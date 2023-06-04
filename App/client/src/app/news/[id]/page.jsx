import styles from '../../../styles/pages/oneNews.module.scss'

import { getOneNews } from "@/utils/data.server.request"
import HTMLReactParser from "html-react-parser";

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.id;
    const news = await getOneNews(params.id);

    return {
        title: news.data.attributes.title,
    };
}

export default async function OneNewsPage({ params, searchParams }) {
    const res = await getOneNews(params.id);
    const news = res.data.attributes;
    console.log(news);

    return (
        <div className={styles.news}>
            <header>
                <h1>{news.title}</h1>
                <div>Дата: {news.date}</div>
            </header>
            <section>
                {news.content ? HTMLReactParser(news.content) : ''}
            </section>
        </div>
    )
}