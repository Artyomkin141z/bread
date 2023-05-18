import styles from '../../styles/components/products/product.module.scss'

import { FaStar } from "react-icons/fa";

export default function Product({ product, host }) {
    return (
        <div
            className={styles.product}
        >
            <img
                src={`${host}${product.image.url}`}
                width={product.image.width}
                height={product.image.height}
                alt={product.title}
            />
            <h3>{product.title}</h3>
            <div className={styles.comments}>
                <FaStar />
                <p>4.7 (3)</p>
            </div>
        </div>
    )
}