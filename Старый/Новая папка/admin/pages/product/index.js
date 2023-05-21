import Link from "next/link"

export default function Product(){
    return(
        <div>
            <p>Товары</p>
            <Link href='/product/create'>Создать</Link>
        </div>
    )
}