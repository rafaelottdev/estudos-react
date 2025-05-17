import styles from "./Navbar.module.css"

import CategoryMenu from "./CategoryMenu/CategoryMenu"
import SearchInput from "./SearchInput/SearchInput"
import Favorites from "./Favorites/Favorites"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import Settings from "./Settings/Settings"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <CategoryMenu content="Categorias" />

                <SearchInput />

                <Favorites />

                <ShoppingCart />

                <Settings />
            </ul>
        </nav>
    )
}

export default Navbar
