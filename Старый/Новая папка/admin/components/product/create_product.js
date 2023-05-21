import styles from '../../styles/CMP/cmp_product_create_product.module.css';

import {useState} from 'react';

import CreateProductTypes from './create_product_types';
import ImageUploader from '../general/image_uploader';

import UIInput from '../UI/ui_input';
import UITextarea from '../UI/ui_textarea';
import UISelect from '../UI/ui_select';

export default function CreateProduct(){
    const [productData, setProductData] = useState({
        name: '',               //Название
        description: '',        //Описание
        code: '',               //Код товара
    })
    const [productDetails, setProductDetails] = useState({
        gender: '',         //Пол
        //color: '',        //Цвета
        purpos: '',         //Предназначения
        country: '',        //Страна производитель
        materials: '',      //Материалы
        idBrand: ''         //ID бренда
    })
    const [productImages, setProductImages] = useState([{
        url: '',            //Адрес картинки
        order: 0,           //Порядок картинки
    }])
    const [productTypes, setProductTypes] = useState([{
        color: '',          //Цвет
        size: '',           //Размер
        retailPrice: 0,     //Розничная цена
    }])
    const [prooductTypesImages, setProductTypesImages] = useState([{
        url: '',        //Адрес картинки
        order: 0,       //Порядок картинки
    }])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        // TODO: submit form data to server
    }

    return(
        <div className={styles.container}> 
            <form onSubmit={handleSubmit}>
                <h2>Основная информация</h2>
                <div className={styles.input_container}>
                    <UIInput 
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        value={productData.name}
                        onChange={(event) => {setProductData({
                            ...productData,
                            name: event.target.value
                        })}}
                        label="Название"
                    />
                    <ImageUploader />
                </div>
                <UIInput
                    type="text"
                    id="code"
                    name="code"
                    placeholder=" "
                    value={productData.code}
                    onChange={(event) => {setProductData({
                        ...productData,
                        name: event.target.value
                    })}}
                    label="Код товара"
                />
                <UITextarea 
                    id="description"
                    name="description"
                    placeholder=" "
                    value={productData.description}
                    onChange={(event) => {setProductData({
                        ...productData,
                        name: event.target.value
                    })}}
                    label="Описание"
                />
                <UISelect 
                    label="Пол:"
                    id="gender"
                    name="gender"
                    value={productDetails.gender}
                    onChange={(event) => {setProductDetails({
                        ...productDetails,
                        gender: event.target.value
                    })}}
                    options={[
                        {value:'', content:'Выбрать пол'},
                        {value:'male', content:'Мужской'},
                        {value:'female', content:'Женский'},
                        {value:'child', content:'Детское'}
                    ]}
                />
                <UIInput
                    type="text"
                    id="purpos"
                    name="purpos"
                    placeholder=" "
                    value={productDetails.purpos}
                    onChange={(event) => {setProductDetails({
                        ...productDetails,
                        gender: event.target.value
                    })}}
                    label="Предназначение:"
                />
                <UIInput
                    type="text"
                    id="materials"
                    name="materials"
                    placeholder=" "
                    value={productDetails.materials}
                    onChange={(event) => {setProductDetails({
                        ...productDetails,
                        gender: event.target.value
                    })}}
                    label="Материалы"
                />
                <CreateProductTypes 
                    productTypes={productTypes}
                    setProductTypes={setProductTypes}
                />
                <button type="submit" onClick={console.log({
                    productData, 
                    productDetails,
                    productTypes
                })}
                >Создать</button>
            </form>
        </div>
    )
}