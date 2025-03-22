import { useState } from "react"

function GameList({ game1, game2, game3, game4, game5, game6, game7 }) {
    return (
        <>
            <li>{game1}</li>
            <li>{game2}</li>
            <li>{game3}</li>
            <li>{game4}</li>
            <li>{game5}</li>
            <li>{game6}</li>
            <li>{game7}</li>
        </>
    )
}

export default GameList
