import styles from '../../styles/CMP/cmp_product_create_product_types.module.css'

import deleteImg from '../../public/image/delete.svg'
import pictureImg from '../../public/image/picture.svg'

import UIInput from "../UI/ui_input"

import Image from 'next/image'

export default function CreateProductTypes({productTypes, setProductTypes}){
    
    function returnProductType(product, index){
        return(<>
            <UIInput 
                type="text"
                id="color"
                name="color"
                placeholder=" "
                value={productTypes[index].color}
                onChange={(event) => {
                    productTypes[index].color = event.target.value
                    setProductTypes([...productTypes])
                    //
                }}
                label="Цвет"
            />
            
            <UIInput
                type="number"
                id="color"
                name="color"
                placeholder=" "
                value={productTypes[index].size}
                onChange={(event) => {
                    productTypes[index].size = event.target.value
                    setProductTypes([...productTypes])
                }}
                label="Размер"
            />
            <UIInput
                type="number"
                id="color"
                name="color"
                placeholder=" "
                value={productTypes[index].price}
                onChange={(event) => {
                    productTypes[index].price = event.target.value
                    setProductTypes([...productTypes])
                }}
                label="Цена"
            />
            <button type="button"><Image src={pictureImg} alt='Вставить изображение' width='25' height='25'/></button>
            <button type="button" onClick={()=>{
                productTypes.splice(index, 1)
                setProductTypes([...productTypes])
            }}
            ><Image src={deleteImg} alt='Удалить вид продукта' width='25' height='25'/></button>
        </>)
    }

    const productTypesItems = productTypes.map((productType, i) => {
        <div>{i}</div>
    })
    
    return(<div className={styles.container}>
        <h2>Виды товара</h2>
        <ul>
            {productTypes.map((product, index) => (
                <li key={index}>
                    {returnProductType(product, index)}
                </li>
            ))}
        </ul>
        <button type="button" onClick={()=>{
            setProductTypes([...productTypes, {
                color: '',          //Цвет
                size: '',           //Размер
                retailPrice: 0,     //Розничная цена
            }])
        }}>Добавить</button>
    </div>)
}