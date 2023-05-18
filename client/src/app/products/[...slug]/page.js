'use client'
import styles from '../../../styles/pages/categories.module.scss'

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
    getMenuProductItem

    console.log(menuItem);

    const content = menuItem[0];

    const renderProducts = (products) => {
        console.log(content.related.products);
        return (
            products.map(product => {
                return (
                    <Product
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
                <h1>{content.title ? content.title : ''}</h1>
                <div className={styles.baner}>
                    
                </div>
            </div>
            <div className={styles.content}>
                {renderProducts(content.related.products)}
            </div>
        </>
    )
}