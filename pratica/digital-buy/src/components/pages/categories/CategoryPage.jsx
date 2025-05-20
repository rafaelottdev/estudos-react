import styles from "./CategoryPage.module.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../ui/card/ProductCard"

const CategoryPage = () => {
    const { id } = useParams()

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState()
    const urlCategories = "http://localhost:3000/categories"

    const [products, setProducts] = useState([])
    const [currentCategoryProduct, setCurrentCategoryProduct] = useState([])
    const urlProducts = "http://localhost:3000/products"

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(urlCategories)
                const data = await response.json()
                setCategories(data)
            }

            catch (error) {
                console.log(`Erro ao buscar categorias: ${error}`)
            }
        }

        fetchCategories()
    }, [])

    useEffect(() => {
        if(categories.length > 0) {
            const currentCategory = categories.find((cat) => cat.id === id)
            setCategory(currentCategory)
        }
    }, [categories, id])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(urlProducts)
                const data = await response.json()
                setProducts(data)
            }

            catch (error) {
                console.log(`Erro ao buscar produtos: ${error}`)
            }
        }

        fetchProducts()
    }, [])

    useEffect(() => {
        if(products.length > 0) {
            const categoryProductList = products.filter((product) => product.category_id == id)
            setCurrentCategoryProduct(categoryProductList)
        }
    }, [products, id])
    
    return (
        <>
            {
                category ? (
                    category.is_active ? (
                        <section className={styles.category_container}>
                            <div>
                                <h2>{category.name}</h2>
                                <p>{category.description}</p>
                            </div>

                            <ul>
                                {
                                    currentCategoryProduct && (
                                        currentCategoryProduct.map((categoryProduct) => (
                                            <li key={categoryProduct.id}>
                                                <ProductCard 
                                                    key={categoryProduct.id}
                                                    id={categoryProduct.id}
                                                    name={categoryProduct.name}
                                                    description={categoryProduct.description}
                                                    brand={categoryProduct.brand}
                                                    price={categoryProduct.price}
                                                    discount_price={categoryProduct.discount_price}
                                                    stock_quantity={categoryProduct.stock_quantity}
                                                    unit={categoryProduct.unit}
                                                    images={categoryProduct.images}
                                                    sold={categoryProduct.sold}
                                                    id_category={id}
                                                />
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </section>
                    ) : (
                        <div>
                            <p>Categoria desativada</p>
                        </div>
                    )
                ) : (
                    <div>
                        <p>Carregando...</p>
                    </div>
                )
            }
        </>
    )
}

export default CategoryPage
