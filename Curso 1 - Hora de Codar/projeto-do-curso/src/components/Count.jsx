import { useState } from "react"

function Count() {
    function addNum() {
        setNum(num + 1)
    }

    function removeNum() {
        setNum(num - 1)
    }

    const [num, setNum] = useState(0)

    return (
        <>
            <p id="valor">{num}</p>
            <button onClick={addNum}>Aumentar</button>
            <button onClick={removeNum}>Diminuir</button>
        </>
    )
}

export default Count
