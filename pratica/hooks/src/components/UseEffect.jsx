import { useEffect, useState } from 'react'

function UseEffect() {
    const [resourceType, setResourceType] = useState("Posts")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(resp => resp.json())
        .then((data) => {
            setItems(data)
        })
    }, [resourceType])

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType)
    }

  return (
    <div>
        <button onClick={() => {changeResourceType("Posts")}}>Posts</button>
        <button onClick={() => {changeResourceType("Comments")}}>Comments</button>
        <button onClick={() => {changeResourceType("Todos")}}>Todos</button>

        {
            items.map((item, i) => (
                <p key={i}>
                    {/* {item.title ? "Possui titulo: " + item.title : "Não Possui titulo: " + item.id} */}
                </p>
            ))
        }
    </div>
  )
}

export default UseEffect
