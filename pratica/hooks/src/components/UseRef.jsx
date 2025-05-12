import { useState, useRef, useEffect } from "react"

function UseRef() {
    const [name, setName] = useState("")
    const renders = useRef(0)
    const inputRef = useRef()
    const previusName = useRef()


    function focusInput() {
        inputRef.current.focus()
    }

    useEffect(() => {
        renders.current = renders.current + 1
    })
    
    useEffect(() => {
        previusName.current = name
    }, [name])

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <p>oi meu nome é {name}</p>
            <p>Renders: {renders.current}</p>
            <button onClick={focusInput}>Focus Input</button>
            <p>Meu nome era: {previusName.current}</p>
        </div>
    )
}

export default UseRef
