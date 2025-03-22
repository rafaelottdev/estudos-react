import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='pegout' anoLançamento={333} />
                <Item marca='ferrari' anoLançamento={1845} />
            </ul>
        </>
    )
}

export default List
