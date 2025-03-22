import CoverSection from "../main/Cover-section"
import Tape from "../main/Tape-section"
import Evento from "../eventos/Evento"

import '../../assets/css/Main.module.css'

function MainElement() {
    return (
        <main>
            <CoverSection />
            <Tape />
            <Evento />
        </main>
    )
}

export default MainElement
