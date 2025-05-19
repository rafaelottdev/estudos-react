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
                    <Link to="/food">
                        Alimentos e Bebidas
                    </Link>
                </li>
                
                <li>
                    <Link to="/Fashion">
                        Moda e Vestuario
                    </Link>
                </li>
                
                <li>
                    <Link to="/Beauty">
                        Beleza
                    </Link>
                </li>
                
                <li>
                    <Link to="/Furniture">
                        Móveis
                    </Link>
                </li>

                <li>
                    <Link to="/Tools">
                        Ferramentas
                    </Link>
                </li>
                
                <li>
                    <Link to="/Automotive">
                        Automotivos
                    </Link>
                </li>
                
                <li>
                    <Link to="/Technology">
                        Tecnologia
                    </Link>
                </li>
                
                <li>
                    <Link to="/Games">
                        Games
                    </Link>
                </li>
                
                <li>
                    <Link to="/Childrens">
                        Infantil
                    </Link>
                </li>
                
                <li>
                    <Link to="/Health">
                        Saúde
                    </Link>
                </li>
                
                <li>
                    <Link to="/Books">
                        Livros
                    </Link>
                </li>

                <li>
                    <Link to="/Pets">
                        Pets
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default CategoryMenuItem
