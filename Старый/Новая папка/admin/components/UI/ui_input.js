import styles from '../../styles/UI/ui_input.module.css';

export default function UIInput({type, id, name, placeholder, value, onChange, label}){
    return(
        <div className={styles.input__container}>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}