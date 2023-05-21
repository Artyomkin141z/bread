import styles from '../../styles/UI/ui_select.module.css';

export default function UISelect({id, name, value, onChange, label, options}){
    return(
        <div className={styles.container}> 
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required
            >   
                {options.map((option) =>
                    <option key={option.value + option.content} value={option.value}>{option.content}</option>
                )}
            </select>
        </div>
    )
}