import { useState } from "react"

function UseMemo() {
    const [number, setNumber] = useState(1)
    const [text, setText] = useState("")

    const doubleNumber = slowFunction(() => {
        return slowFunction(number)
    }, [number])

    return (
        <div>
            <p>{number}</p>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setNumber(2)}>increment</button>
            <p>text: {text}</p>
        </div>
    )
}

 const slowFunction = (num) => {
    console.log('Slow function is being called!')
    for(let i = 0; i < 10000; i++) {}
        return num * 2
}

export default UseMemo
