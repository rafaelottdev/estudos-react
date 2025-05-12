import { forwardRef, useRef, useImperativeHandle } from "react"

const Input = forwardRef(function Input(props, ref) {
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => {
        return {focus() {inputRef.current.focus()}}
    }, [])

    return <input { ...props } ref={inputRef} />
})

export default Input
