import { createBrowserRouter } from "react-router-dom"

import App from "../../App"

import FoodAndDrinks from "../pages/categories/FoodAndDrinks/FoodAndDrinks"
import Fashion from "../pages/categories/Fashion/Fashion"
import Beauty from "../pages/categories/Beauty/Beauty"
import Furniture from "../pages/categories/Furniture/Furniture"
import Tools from "../pages/categories/Tools/Tools"
import Automotive from "../pages/categories/Automotive/Automotive"
import Technology from "../pages/categories/Technology/Technology"
import Games from "../pages/categories/Games/Games"
import Childrens from "../pages/categories/Childrens/Childrens"
import Health from "../pages/categories/Health/Health"
import Books from "../pages/categories/Books/Books"
import Pets from "../pages/categories/Pets/Pets"

import ShoppingCart from "../pages/ShoppingCart/ShoppingCart"
import Favorites from "../pages/Favorites/Favorites"

import MainContent from "../layout/Main/MainContent/MainContent"

import BestSellersPanel from "../layout/Main/MainContent/Home/Panel/BestSellersPanel/BestSellersPanel"
import NewsPanel from "../layout/Main/MainContent/Home/Panel/NewsPanel/NewsPanel"
import ShoppingCartPanel from "../layout/Main/MainContent/Home/Panel/ShoppingCartPanel/ShoppingCartPanel"
import FavoritesPanel from "../layout/Main/MainContent/Home/Panel/FavoritesPanel/FavoritesPanel"

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
            {path: "food", element: <FoodAndDrinks />},
            {path: "Fashion", element: <Fashion />},
            {path: "Beauty", element: <Beauty />},
            {path: "Furniture", element: <Furniture />},
            {path: "Tools", element: <Tools />},
            {path: "Automotive", element: <Automotive />},
            {path: "Technology", element: <Technology />},
            {path: "Games", element: <Games />},
            {path: "Childrens", element: <Childrens />},
            {path: "Health", element: <Health />},
            {path: "Books", element: <Books />},
            {path: "Pets", element: <Pets />},

            {path: "Cart", element: <ShoppingCart />},
            {path: "Favorites", element: <Favorites />},
        ]
    }
])
