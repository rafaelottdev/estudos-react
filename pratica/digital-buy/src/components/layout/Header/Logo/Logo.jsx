import styles from "./Logo.module.css"

import logo from "../../../../assets/img/logo.png"

import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <h1 className={styles.logo}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="logo do site" className={styles.logo_img} />
            </Link>
        </h1>
    )
}

export default Logo
