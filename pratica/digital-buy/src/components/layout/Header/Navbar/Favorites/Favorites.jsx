import styles from "./Favorites.module.css"

import { IoIosHeart } from "react-icons/io"

const Favorites = () => {
    return (
        <li className={styles.icon_container}>
            <IoIosHeart />
        </li>
    )
}

export default Favorites
