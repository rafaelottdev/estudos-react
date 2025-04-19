import { useState } from "react"

import CommentSection from "./CommentSection"
import MessageForm from "../form/MessageForm"

import CommentMessage from "./CommentMessage"

function Main() {
    const [name, setName] = useState('')
    // const [comment, setComment] = useState('')
    const [components, setComponents] = useState([])
    const [counter, setCounter] = useState(1)
    const [n, setN] = useState('')
    

    function getName(e) {
        setName(e.target.value)
    }

    // function getComment(e) {
    //     setComment(e.target.value)
    // }

    function sendComment(e) {
        e.preventDefault()

        setN(name)

        setComponents([...components, counter])
        setCounter(counter + 1)
    }

    return (
        <>
            <main>
                <CommentSection nameValue={n} /*commentValue={comment}*/ componentList={components} />

                <MessageForm nameOnChange={getName} /*commentOnChange={getComment}*/ sendCommentOnClick={sendComment} />
            </main>
        </>
    )
}

export default Main
