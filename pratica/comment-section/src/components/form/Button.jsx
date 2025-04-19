import styles from "./Button.module.css"

function Button({ commentOnClick }) {
    return (
        <>
            <button className={styles.btn} onClick={commentOnClick}>Comentar</button>
        </>
    )
}

export default Button
