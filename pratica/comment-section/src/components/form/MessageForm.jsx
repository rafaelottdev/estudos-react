import styles from "./MessageForm.module.css"

import Input from "./Input"
import TextArea from "./TextArea"
import Button from "./Button"
import CommentBlock from "../layout/CommentBlock"

function MessageForm({ nameOnChange, /*commentOnChange,*/ sendCommentOnClick }) {
    return (
        <>
            <form className={styles.form}>
                <Input type="text" styleType="name" getNameOnChange={nameOnChange} />

                <TextArea /*getCommentOnChange={commentOnChange}*/ />

                <Button commentOnClick={sendCommentOnClick} />
            </form>
        </>
    )
}

export default MessageForm
