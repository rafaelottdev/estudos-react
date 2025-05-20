import styles from "./ProductCard.module.css"

import { useNavigate } from "react-router-dom"

import { FaShoppingCart } from "react-icons/fa"
import { IoIosHeart } from "react-icons/io"

const ProductCard = ({ id, name, description, brand, price, discount_price, stock_quantity, unit, images, sold, id_category }) => {
    const navigate = useNavigate()

    function sendProductPage() {
        navigate(`/product/${id}`)
    }

    return (
        <div className={styles.card_container} onClick={sendProductPage}>
            <div className={styles.img_wrapper}>
                <img src={images[0].url} alt={images[0].alt} />

                <button>
                    <IoIosHeart />
                </button>
            </div>

            <div className={styles.info_product_container}>
                <div className={styles.name_sold_container}>
                    <p>{sold} vendidos</p>
                    <p>{name}</p>
                </div>
                
                <div className={styles.price}>R${price}</div>

        
                <button className={styles.btn}>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    )
}

export default ProductCard
