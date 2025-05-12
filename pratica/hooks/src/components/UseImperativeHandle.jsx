import { forwardRef, useRef, useState } from "react"

import Input from "./InputImperativeHandle"

function UseImperativeHandle() {
const [customerName, setCustomerName] = useState("")
const [customers, setCustomers]  = useState([])

const ref = useRef(null)

function handleClick(e) {
    e.preventDefault()
    setCustomers([... customers, customerName])
    setCustomerName("")
    ref.current.focus()

    console.log(customers)
}

    return (
        <>
            <form>
                <Input
                    ref={ref}
                    onChange={(e) => setCustomerName(e.target.value)}
                    value={customerName}
                />

                <button onClick={handleClick}>Add</button>
            </form>

            {customers.map((customer, idx) => (
                <p key={idx}>{customer}</p>))
            }
        </>
    )
}

export default UseImperativeHandle
