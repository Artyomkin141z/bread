import CarouselItemsComponent from "@/components/widget/CarouselItemsComponent/CarouselItemsComponent";
import { getProduct } from "@/utils/data.server.request";

export default async function ProductPage({ params }) {
    const query = await getProduct(params.id)
    const product = query.data.attributes;
    // console.log(product);

    return (
        <div>
            <header>
                <h2>{product.title}</h2>
            </header>
            <div>
                <img
                    src={`${process.env.HOST_ADMIN_PANEL}${product.image.data.attributes.url}`}
                    width={product.image.width}
                    height={product.image.height}
                    alt={product.title}
                />
                <div>
                    <div>
                        <h3>Описание продукта</h3>
                        <p>
                            <span>Состав: </span>
                            {product.characteristic.composition}
                        </p>
                    </div>
                    <div>
                        <h3>Пищевая ценность на 100г</h3>
                        <div>
                            <div>
                                <h4>Белки</h4>
                                <p>{product.natritional_value.proteins}</p>
                            </div>
                            <div>
                                <h4>Жиры</h4>
                                <p>{product.natritional_value.fats}</p>
                            </div>
                            <div>
                                <h4>Углеводы</h4>
                                <p>{product.natritional_value.carbohydrates}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CarouselItemsComponent
                products={products.data}
                title='Другая наша продукция'
                linkText='Все товары'
                link='/products'
            /> */}
        </div>
    )
}