import styles from '../../styles/general/image_uploader.module.css'

import pictureImg from '../../public/image/picture.svg'
import closeImg from '../../public/image/close.svg'

import UIInput from "../UI/ui_input"

import Image from 'next/image';
import { useState } from 'react';

const ImageUploader = () => {
    const [isShow, setIsShow] = useState(false);

    const showContainer = () => {
        if (isShow) {
            return (
                <div className={styles.container}>
                    <div className={styles.center_container}>
                        <button type='button' className={styles.close}
                            onClick={()=>setIsShow(false)}
                        ><Image src={closeImg} alt='Вставить изображение' width='25' height='25' /></button>
                        <p>Вставить адрес картинки либо выберите</p>
                        <div className={styles.url}>
                            <UIInput
                                type="text"
                                id="color"
                                name="color"
                                placeholder=" "
                                value={''}
                                onChange={(event) => { }}
                                label="URL"
                            />
                            <button type='button'>Выбрать</button>
                        </div>
                        <div className={styles.upload_container}>
                            <div>
                                <p>Перетащите файл сюда...</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <button type="button" className={styles.button}
                onClick={() => { setIsShow(true) }}
            ><Image src={pictureImg} alt='Вставить изображение' width='25' height='25' /></button>
            {showContainer()}
        </>
    );
};

export default ImageUploader;
