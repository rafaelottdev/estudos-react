import styles from "./TextArea.module.css"

function TextArea({ /*getCommentOnChange*/ }) {
    return (
        <div className={styles.textArea_container}>
            <textarea className={styles.textArea} /*onChange={getCommentOnChange}*/ placeholder="Escreva um comentario"></textarea>
        </div>
    )
}

export default TextArea
