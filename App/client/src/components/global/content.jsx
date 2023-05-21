'use client'
import styles from '../../styles/components/dynamicPage/content.module.scss'

import { usePathname } from 'next/navigation'

import { getMenuItem } from '@/utils/data.client.request';
import HTMLReactParser from 'html-react-parser';

export default function ContentComponent() {
    const pathname = usePathname();
    const {menuItem, getMenuItemIsLoading, getMenuItemIsError} = getMenuItem(pathname);  
        
    if(getMenuItemIsLoading){
        return (
            <div>
                Загрузка
            </div>
        )
    }

    const content = menuItem[0].related;
    // console.log(content);
    content.content = content.content.replace(/<p>{/g, '<').replace(/}<\/p>/g, '>')
    // content.content = content.content.replace(/{/g, '<').replace(/}/g, '>')
    console.log(content);

    return (
        <>
            <div className={styles.title}>
                <h1>{content.title ? content.title : ''}</h1>
                <div className={styles.baner}>
                    
                </div>
            </div>
            <div className={styles.content}>
                {content.content ? HTMLReactParser(content.content) : ''}
            </div>
        </>
    )
}