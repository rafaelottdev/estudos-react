import { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => {setCount((prevState) => prevState + 1)}}>Aumentar Valor</button>
      <button onClick={() => {setCount((prevState) => prevState - 1)}}>Diminuir Valor</button>
    </div>
  )
}

export default UseState
