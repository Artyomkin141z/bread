import styles from '../../styles/categories/tabs.module.css'

export default function Tabs({tabs, setTabs, activeTab, setActiveTab}){

    const tabsList = tabs.map((item, i) => {
        return <div 
            key={i} 
            className={`${styles.tab} ${i + 1 == activeTab ? styles.active : ''}`}
            onClick={() => setActiveTab(item.id)}
        >{item.name}</div>
    });

    return (
        <div className={styles.container}>
            {tabsList}
            <button type='button'>Создать</button>
        </div>
    )
}