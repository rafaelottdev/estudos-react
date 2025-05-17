import styles from "./SearchInput.module.css"

import Input from "../../../../form/Input/Input"

const SearchInput = () => {
    return (
        <li className={styles.input_container}>
            <Input type="search" placeholder="Pesquisa..." styleType="search" />
        </li>
    )
}

export default SearchInput
