import Link from 'next/link';
import styles from '../../styles/components/products/product.module.scss'

import { FaStar } from "react-icons/fa";

export default function Product({ id, title, image, host, packages }) {
    const prices = packages.reduce((acc, item) => {
        if (item.price < acc.min) {
            acc.min = item.price.toFixed(2);
        }
        if (item.price > acc.max) {
            acc.max = item.price.toFixed(2);
        }
        return acc;
    }, { min: Infinity, max: -Infinity });

    return (
        <div
            className={styles.product}
        >
            <img
                src={`${host}${image.url}`}
                width={image.width}
                height={image.height}
                alt={title}
            />
            <Link href={`/product/${id}`}><h3>{title}</h3></Link>
            <div className={styles.price}>
                {prices.min == prices.max ? prices.min : `${prices.min} - ${prices.max}`} р
            </div>
            {/* <div className={styles.comments}>
                <FaStar />
                <p>4.7 (3)</p>
            </div> */}
        </div>
    )
}