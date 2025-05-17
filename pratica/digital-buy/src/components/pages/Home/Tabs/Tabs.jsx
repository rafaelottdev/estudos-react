import styles from "./Tabs.module.css"

import { Link } from "react-router-dom"

const Tabs = () => {
    return (
        <div>
            <ul>
                <Link to="">
                    <li>Mais Vendidos</li>
                </Link>

                <Link to="">
                    <li>Novidades</li>
                </Link>

                <Link to="">
                    <li>Carrinho</li>
                </Link>

                <Link to="">
                    <li>Favoritos</li>
                </Link>
            </ul>
        </div>
    )
}

export default Tabs
