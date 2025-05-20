import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

     useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/products/${id}`)
                    const data = await response.json()
                    setProduct(data)
                }
    
                catch (error) {
                    console.log(`Erro ao buscar produtos: ${error}`)
                }
                console.log('oi')
            }
    
            fetchProducts()
        }, [])

    return (
        <div>
            <div>{product.name}</div>
            <div>Preço: {product.price}</div>
            <div>Vendidos: {product.sold}</div>
        </div>
    )
}

export default Product
