import styles from "./ShoppingCartItem.module.css"

import { Link } from "react-router-dom"

import { FaShoppingCart } from "react-icons/fa"

const ShoppingCartItem = () => {
    return (
        <li>
            <Link className={styles.cart_icon_container} to="/Cart">
                <FaShoppingCart />
            </Link>
        </li>
    )
}

export default ShoppingCartItem
