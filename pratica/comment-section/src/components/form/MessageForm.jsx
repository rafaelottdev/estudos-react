import styles from "./MessageForm.module.css"

import Input from "./Input"
import TextArea from "./TextArea"
import Button from "./Button"

function MessageForm({ n, c, nameOnChange, commentOnChange, sendCommentOnClick }) {
    return (
        <>
            <form className={styles.form}>
                <Input type="text" value={n} styleType="name" getNameOnChange={nameOnChange} />

                <TextArea value={c} getCommentOnChange={commentOnChange} />

                <Button commentOnClick={sendCommentOnClick} />
            </form>
        </>
    )
}

export default MessageForm
