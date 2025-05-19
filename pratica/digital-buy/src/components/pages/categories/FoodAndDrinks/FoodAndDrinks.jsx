import { useEffect, useState } from "react"

const FoodAndDrinks = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/categories")
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Food And Drinks</h1>
            {
                categories && categories.map((categorie) => (<p>{categorie.name}</p>))
            }
        </div>
    )
}

export default FoodAndDrinks
