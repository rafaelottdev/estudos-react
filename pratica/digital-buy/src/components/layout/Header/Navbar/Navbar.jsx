import styles from "./Navbar.module.css"

import CategoryMenuItem from "./CategoryMenuItem/CategoryMenuItem"
import SearchInputItem from "./SearchInputItem/SearchInputItem"
import FavoriteItem from "./FavoriteItem/FavoriteItem"
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem"
import SettingsItem from "./SettingsItem/SettingsItem"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <CategoryMenuItem content="Categorias" />

                <SearchInputItem />

                <FavoriteItem />

                <ShoppingCartItem />

                <SettingsItem />
            </ul>
        </nav>
    )
}

export default Navbar
