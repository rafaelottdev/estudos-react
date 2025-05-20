import { createBrowserRouter } from "react-router-dom"

import App from "../../App"

import CategoryPage from "../pages/categories/CategoryPage"

import ShoppingCart from "../pages/ShoppingCart/ShoppingCart"
import Favorites from "../pages/Favorites/Favorites"

import MainContent from "../layout/Main/MainContent/MainContent"

import BestSellersPanel from "../layout/Main/MainContent/Home/Panel/BestSellersPanel/BestSellersPanel"
import NewsPanel from "../layout/Main/MainContent/Home/Panel/NewsPanel/NewsPanel"
import ShoppingCartPanel from "../layout/Main/MainContent/Home/Panel/ShoppingCartPanel/ShoppingCartPanel"
import FavoritesPanel from "../layout/Main/MainContent/Home/Panel/FavoritesPanel/FavoritesPanel"

import Product from "../pages/Product/Product"

export const router = createBrowserRouter([
    {
        path: "/*",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainContent />,
                children: [
                    { index: true, element: <BestSellersPanel /> },
                    { path: "newsPanel", element: <NewsPanel /> },
                    { path: "CartPanel", element: <ShoppingCartPanel /> },
                    { path: "FavoritesPanel", element: <FavoritesPanel /> }
                ]
            },
            {path: "category/:id", element: <CategoryPage />},

            {path: "Cart", element: <ShoppingCart />},
            {path: "Favorites", element: <Favorites />},
            {path: "product/:id", element: <Product />}
        ]
    }
])
