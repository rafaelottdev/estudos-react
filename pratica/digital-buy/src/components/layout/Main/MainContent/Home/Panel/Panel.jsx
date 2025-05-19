import styles from "./Panel.module.css"

import { Outlet } from "react-router-dom"

const Panel = () => {
    return (
        <div className={styles.panel_container}>
            <Outlet />
        </div>
    )
}

export default Panel
