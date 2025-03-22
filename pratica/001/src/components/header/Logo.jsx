import imgLogo from '../../assets/img/logo/ps2-logo.png'

import styles from '../../assets/css/Logo.module.css'

function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img src={imgLogo} alt="Logo do site" className={styles.logoImg} />
            <p className={styles.pageTitle}>Playstation 2</p>
        </div>
    )
}

export default Logo
