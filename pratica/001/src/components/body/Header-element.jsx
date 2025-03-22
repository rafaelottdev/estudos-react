import Logo from "../header/Logo"
import Nav from "../header/nav"

import '../../assets/css/Header.module.css'

function HeaderElement() {
    return (
        <>
            <header>
                <Logo />

                <Nav />
            </header>
        </>
    )
}

export default HeaderElement
