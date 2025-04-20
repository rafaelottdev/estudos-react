import styles from "./TextArea.module.css"

function TextArea({ value, getCommentOnChange }) {
    return (
        <div className={styles.textArea_container}>
            <textarea value={value} className={styles.textArea} onChange={getCommentOnChange} placeholder="Escreva um comentario"></textarea>
        </div>
    )
}

export default TextArea
