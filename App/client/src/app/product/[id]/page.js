import styles from '../../../styles/pages/product.module.scss'

import CarouselItemsComponent from "@/components/widget/CarouselItemsComponent/CarouselItemsComponent";
import SliderComponent from '@/components/widget/SliderComponent/SliderComponent';

import { get15Products, getProduct } from "@/utils/data.server.request";
import Link from 'next/link';

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.id;
    const product = await getProduct(params.id);

    return {
        title: product.data.attributes.title,
    };
}

export default async function ProductPage({ params }) {
    const products = await get15Products();
    const query = await getProduct(params.id)
    const product = query.data.attributes;
    // console.log(product);

    const prices = product.package.reduce((acc, item) => {
        if (item.price < acc.min) {
            acc.min = item.price.toFixed(2);
        }
        if (item.price > acc.max) {
            acc.max = item.price.toFixed(2);
        }
        return acc;
    }, { min: Infinity, max: -Infinity });

    const renderPackage = () => {
        return product.package.map((pack) => {
            return (
                <tr key={pack.id}>
                    <td>{pack.package}</td>
                    <td>{pack.mass}г</td>
                </tr>
            )
        })
    }

    const renderCategories = () => {
        return product.categories.data.map(category => {
            return (
                <p key={category.id}>{category.attributes.title}</p>
            )
        })
    }

    return (
        <div>
            <header className={styles.head}>
                <h1>{product.title}</h1>
                <div className={styles.categories}>
                    {renderCategories()}
                </div>
            </header>
            <div className={styles.product}>
                <img
                    src={`${process.env.HOST_ADMIN_PANEL}${product.image.data.attributes.url}`}
                    width={product.image.width}
                    height={product.image.height}
                    alt={product.title}
                />
                <div>
                    <div className={styles.description}>
                        <h3>Описание продукта</h3>
                        <p>
                            <span>Состав: </span>
                            {product.characteristic.composition}
                        </p>
                        <a href="#description">Перейти к полному описанию продукта</a>
                    </div>
                    <div className={styles.natritional_value}>
                        <h3>Пищевая ценность на 100г</h3>
                        <div>
                            <div>
                                <h4>Белки</h4>
                                <p>{product.natritional_value.proteins}</p>
                            </div>
                            <div>
                                <h4>Жиры</h4>
                                <p>{product.natritional_value.fats}</p>
                            </div>
                            <div>
                                <h4>Углеводы</h4>
                                <p>{product.natritional_value.carbohydrates}</p>
                            </div>
                            <div>
                                <h4>Энергетическая ценность</h4>
                                <p>{product.energy.calories} ккал / {product.energy.energy} кДж</p>
                            </div>
                        </div>
                        <a href="#characteristic">Перейти к характеристикам</a>
                    </div>
                </div>
                <div className={styles.price}>
                    <h2>{prices.min == prices.max ? prices.min : `${prices.min} - ${prices.max}`} р <span>/шт.</span></h2>
                    <p>Ориентировачная цена</p>
                </div>
            </div>
            <div id='description' className={styles.description2}>
                <div className={styles.container}>
                    <h2>Описание продукта</h2>
                    <div>
                        <h3>Состав</h3>
                        <p>{product.characteristic.composition}</p>
                    </div>
                    <div id='characteristic'>
                        <h3>Условия и сроки хранения</h3>
                        <p>{product.characteristic.expiration_date}</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <h2>Характеристики</h2>
                    <div className={styles.grid}>
                        <table>
                            <tbody>
                                <tr>
                                    <th colspan="2">Пищевая ценность на 100г</th>
                                </tr>
                                <tr>
                                    <td>Белки</td>
                                    <td>{product.natritional_value.proteins}</td>
                                </tr>
                                <tr>
                                    <td>Жиры</td>
                                    <td>{product.natritional_value.fats}</td>
                                </tr>
                                <tr>
                                    <td>Углеводы</td>
                                    <td>{product.natritional_value.carbohydrates}</td>
                                </tr>
                                <tr>
                                    <td>Энергетическая ценность</td>
                                    <td>{product.energy.calories} ккал / {product.energy.energy} кДж</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th colspan="2">Упаковка</th>
                                </tr>
                                {renderPackage()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CarouselItemsComponent
                products={products.data}
                title='Другая наша продукция'
                linkText='Все товары'
                link='/products'
            />
        </div>
    )
}