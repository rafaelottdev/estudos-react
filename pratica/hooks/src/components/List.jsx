import { useEffect, useState } from "react"

function List({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems().then((result) => setItems(result))
    }, [getItems])

    return (
        <>
            {items &&
                    items.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
        </>
    )
}

export default List
