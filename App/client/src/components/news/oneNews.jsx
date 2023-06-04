import styles from '../../styles/components/news/oneNews.module.scss'

import Link from "next/link";

export default function OneNews({item}) {
    return (
        <Link href={`/news/${item.id}`} key={item.id} className={styles.oneNews}>
            <img
                src={`${process.env.HOST_ADMIN_PANEL}${item.attributes.titleImage.data.attributes.url}`}
                alt={item.attributes.title}
                width={item.attributes.titleImage.data.attributes.width}
                height={item.attributes.titleImage.data.attributes.height}
            />
            <h3><div>{item.attributes.title}</div></h3>
        </Link>
    )
}