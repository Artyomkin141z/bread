import styles from '../../styles/components/products/product.module.scss'

import { FaStar } from "react-icons/fa";

export default function Product({ title, image, host }) {
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
            <h3>{title}</h3>
            <div className={styles.comments}>
                <FaStar />
                <p>4.7 (3)</p>
            </div>
        </div>
    )
}