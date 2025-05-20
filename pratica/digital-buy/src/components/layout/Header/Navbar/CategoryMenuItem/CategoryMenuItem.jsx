import styles from "./CategoryMenuItem.module.css"

import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoryMenuItem = ({ content }) => {
    return (
        <li className={styles.category_item}>
            <div>
                <p>{content}</p>
                <MdOutlineKeyboardArrowRight />
            </div>

            <ul>
                <li>
                    <Link to="/category/1">
                        Alimentos e Bebidas
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/2">
                        Moda e Vestuario
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/3">
                        Beleza
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/4">
                        Móveis
                    </Link>
                </li>

                <li>
                    <Link to="/category/5">
                        Ferramentas
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/6">
                        Automotivos
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/7">
                        Tecnologia
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/8">
                        Games
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/9">
                        Infantil
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/10">
                        Saúde
                    </Link>
                </li>
                
                <li>
                    <Link to="/category/11">
                        Livros
                    </Link>
                </li>

                <li>
                    <Link to="/category/12">
                        Pets
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default CategoryMenuItem
