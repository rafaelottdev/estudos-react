import styles from "./FavoriteItem.module.css"

import { Link } from "react-router-dom"

import { IoIosHeart } from "react-icons/io"

const FavoriteItem = () => {
    return (
        <li>
            <Link className={styles.icon_container} to="/favorites">
                <IoIosHeart />
            </Link>
        </li>
    )
}

export default FavoriteItem
