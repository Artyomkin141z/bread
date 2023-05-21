import styles from '../../styles/UI/ui_textarea.module.css';

import { useState } from 'react';

export default function UITextarea({id, name, value, placeholder, onChange, label}){
    //const [content, setContent] = useState('');

    function handleChange(event) {
        //setContent(event.target.value);
        //event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }

    return( 
        <div className={styles.container}>
            <textarea
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={(event)=>{
                    handleChange(event);
                    onChange(event);
                }}
                required
            />
            <label htmlFor="message">{label}</label>
        </div> 
    )
}