import styles from "./Tabs.module.css"

import { Link } from "react-router-dom"

const Tabs = () => {
    return (
        <div className={styles.tabs_container}>
            <ul className={styles.tabs_list}>
                <li>
                    <Link to="/">
                        Mais Vendidos
                    </Link>
                </li>

                <li>
                    <Link to="/newsPanel">
                        Novidades
                    </Link>
                </li>

                <li>
                    <Link to="/CartPanel">
                        Carrinho
                    </Link>
                </li>

                <li>
                    <Link to="/FavoritesPanel">
                        Favoritos
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Tabs
