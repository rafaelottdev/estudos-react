import styles from "./CommentSection.module.css"

import CommentMessage from "./CommentMessage"

function CommentSection({ componentList }) {
    return (
        <>
            <section className={styles.message_container}>
                <div className={styles.message_box}>
                {
                    componentList && componentList.map(({ id, name, comment }) => {
                        return <CommentMessage key={id} nameValue={name} commentValue={comment} />
                    })
                }
                </div>
            </section>
        </>
    )
}

export default CommentSection
