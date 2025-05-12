import { useCallback, useEffect, useState } from 'react'
import List from './List'


function UseCallBack() {
   const [text, setText] = useState("")
   const [resourceType, setResourceType] = useState("posts")

   const getItems = useCallback(async () => {
        console.log('ta chamando')
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        const responseJSON = await response.json()

        return responseJSON
   }, [resourceType])
        
    return (
    <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <button onClick={() => {setResourceType("Posts")}}>Posts</button>
        <button onClick={() => {setResourceType("Comments")}}>Comments</button>
        <button onClick={() => {setResourceType("Todos")}}>Todos</button>

        <List getItems={getItems} />
    </div>
    )
}

export default UseCallBack
