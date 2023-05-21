import styles from '../../styles/categories/categories.module.css'

import { useState } from 'react'

import Tabs from './tabs'

export default function Categories() {
    const arrTabs = [
        {name: 'Мужское', id: 1},
        {name: 'Женское', id: 2},
        {name: 'Детское', id: 3},
    ]
    
    const arrCategories = [
        {name: 'Кеды'},
        {name: 'Ботинки'},
        {name: 'Летняя'},
        {name: 'Зимняя'},
        {name: 'Для бега'},
        {name: 'Сандалии'},
        {name: 'Тубли'},
        {name: 'Полуботинки'},
        {name: 'Батильоны'},
    ]

    const [categories, setCategories] = useState(arrCategories);

    const [tabs, setTabs] = useState(arrTabs);
    const [activeTab, setActiveTab] = useState(1)

    return(
        <div className={styles.container}>
            <Tabs 
                tabs = {tabs}
                setTabs = {setTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    )
}