import styles from "./CategoryMenu.module.css"

import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoryMenu = ({ content }) => {
    return (
        <li className={styles.category_item}>
            <div>
                <p>{content}</p>
                <MdOutlineKeyboardArrowRight />
            </div>

            <ul>
                <Link to="/food">
                    <li>Alimentos e Bebidas</li>
                </Link>

                <Link to="/Fashion">
                    <li> Moda e Vestuario</li>
                </Link>

                <Link to="/Beauty">
                    <li>Beleza</li>
                </Link>

                <Link to="/Furniture">
                    <li>Móveis</li>
                </Link>

                <Link to="/Tools">
                    <li>Ferramentas</li>
                </Link>

                <Link to="/Automotive">
                    <li>Automotivos</li>
                </Link>

                <Link to="/Technology">
                    <li>Tecnologia</li>
                </Link>

                <Link to="/Games">
                    <li>Games</li>
                </Link>

                <Link to="/Childrens">
                    <li>Infantil</li>
                </Link>

                <Link to="/Health">
                    <li>Saúde</li>
                </Link>

                <Link to="/Books">
                    <li>Livros</li>
                </Link>

                <Link to="/Pets">
                    <li>Pets</li>
                </Link>
            </ul>
        </li>
    )
}

export default CategoryMenu
