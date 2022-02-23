import React, { useState } from 'react'

export default function Login() {

    const [comment, setComment] = useState([]);
    let refText = React.createRef();

    let addComment = () => {
        let myText = refText.current.value;
        let changeState = [...comment, myText];
        setComment(changeState);
        refText.current.value = '';
    }

    return (
        <div>
            <textarea ref={refText}></textarea>
            <button onClick={addComment}>click me</button>
            <ul>{comment.map((el, index) => <ul key={index.toString()}>{el}</ul>)}</ul>
        </div>
    )
 }
