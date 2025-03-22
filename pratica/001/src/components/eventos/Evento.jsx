import { useState } from 'react'

import Style from '../../assets/css/Evento.module.css'

function Evento() {
    const [v, setV] = useState(false)

    function validGames() {
        v ? setV(false) : setV(true)
    }

    return (
        <>
        <button className={Style.showBtn} onClick={validGames}>Mais Jogos</button>

        {
            v && 
                (<ul className={Style.gameList}>
                    <li>Shadow Of The Colossus</li>
                    <li>Burnout</li>
                    <li>Hitman</li>
                    <li>Star Wars</li>
                    <li>Fifa Street</li>
                </ul>)
        }
        </>
    )
}

export default Evento
