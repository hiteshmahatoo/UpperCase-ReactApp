import React, { useState } from 'react'   // rfc command

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText); //Correct way to change the state

    }
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    //  text = "new text"; //Wrong way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    );
}