import { useState } from "react"

import CommentSection from "./CommentSection"
import MessageForm from "../form/MessageForm"

function Main() {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [components, setComponents] = useState([])
    const [counter, setCounter] = useState(1)

    function getName(e) {
        setName(e.target.value)
    }

    function getComment(e) {
        setComment(e.target.value)
    }

    function sendComment(e) {
        e.preventDefault()

        const newComment = {
            id: counter,
            name: name,
            comment, comment
        }

        setComponents([...components, newComment])
        setCounter(counter + 1)

        setName('')
        setComment('')
    }

    return (
        <>
            <main>
                <CommentSection componentList={components} />

                <MessageForm n={name} c={comment} nameOnChange={getName} commentOnChange={getComment} sendCommentOnClick={sendComment} />
            </main>
        </>
    )
}

export default Main
