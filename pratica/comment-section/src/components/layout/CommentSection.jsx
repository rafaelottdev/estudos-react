import styles from "./CommentSection.module.css"

import CommentMessage from "./CommentMessage"

function CommentSection({ nameValue, commentValue, componentList, keyCount }) {
    return (
        <>
            <section className={styles.message_container}>
                <div className={styles.message_box}>
                {
                    componentList && componentList.map((id) => {
                        return <CommentMessage key={id} nameValue={nameValue} commentValue={commentValue} />
                    })
                }
                </div>
            </section>
        </>
    )
}

export default CommentSection
