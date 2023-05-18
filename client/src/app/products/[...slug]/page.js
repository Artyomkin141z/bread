'use client'
import styles from '../../../styles/pages/products.module.scss'

import Link from "next/link";
import { usePathname } from 'next/navigation'

import { host, getMenuProductItem } from '@/utils/data.client.request';
import Product from '@/components/products/product';

export default function Categories() {
    const pathname = usePathname();
    const {menuItem, getMenuItemIsLoading, getMenuItemIsError} = getMenuProductItem(pathname);  
        
    if(getMenuItemIsLoading){
        return (
            <div>
                Загрузка
            </div>
        )
    }

    const content = menuItem[0];

    const renderProducts = (products) => {
        console.log(content.related.products);
        return (
            products.map(product => {
                return (
                    <Product
                        key={product.id}
                        host={host}
                        product={product}
                    />
                )
            })
        )
    }

    return (
        <>
            <div className={styles.title}>
                <div className={styles.h1}>
                    <h1>{content.title ? content.title : ''}</h1>
                    <p>{content.related.products.length ? content.related.products.length : 'Нет'} товара</p>
                </div>
                <div className={styles.baner}>

                </div>
            </div>
            <div className={styles.products}>
                {renderProducts(content.related.products)}
            </div>
        </>
    )
}