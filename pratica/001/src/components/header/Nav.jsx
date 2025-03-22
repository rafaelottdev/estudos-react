import styles from '../../assets/css/Nav.module.css'

function Nav() {
    return (
        <>
            <nav>
                <ul className={styles.navList}>
                    <li>Inicio</li>
                    <li>Top 5</li>
                    <li>Populares</li>
                    <li>Desconhecidos</li>
                    <li>Piores</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
