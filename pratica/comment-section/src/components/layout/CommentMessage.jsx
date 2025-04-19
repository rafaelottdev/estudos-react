import styles from "./CommentMessage.module.css"

function CommentMessage({ nameValue, commentValue}) {
    return (
        <div className={styles.message_box}>
            <p className={styles.name}>{nameValue}</p>

            <div className={styles.comment_container}>
                <p className={styles.comment}>{commentValue}</p>
            </div>
        </div>
    )
}

export default CommentMessage
