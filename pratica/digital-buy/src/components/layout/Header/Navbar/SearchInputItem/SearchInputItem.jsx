import styles from "./SearchInputItem.module.css"

import Input from "../../../../form/Input/Input"

const SearchInputItem = () => {
    return (
        <li className={styles.input_container}>
            <Input type="search" placeholder="Pesquisa..." styleType="search" />
        </li>
    )
}

export default SearchInputItem
