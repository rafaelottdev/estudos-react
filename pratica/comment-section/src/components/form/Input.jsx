import styles from "./Input.module.css"

function Input({ inputType, getNameOnChange }) {
    return (
        <div className={styles.input_container}>
            <input type={inputType} className={styles.input} onChange={getNameOnChange} placeholder="Ecreva seu nome" />
        </div>
    )
}

export default Input
