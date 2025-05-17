import styles from "./ShoppingCart.module.css"

import { FaShoppingCart } from "react-icons/fa"

const ShoppingCart = () => {
    return (
        <li className={styles.cart_icon_container}>
            <FaShoppingCart />
        </li>
    )
}

export default ShoppingCart
