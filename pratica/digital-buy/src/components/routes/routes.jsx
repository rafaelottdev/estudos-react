import { createBrowserRouter } from "react-router-dom"

import App from "../../App"

import Home from "../pages/Home/Home"

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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <Home />},
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
            {path: "Pets", element: <Pets />}
        ]
    }
])
