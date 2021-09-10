import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
    const textOnChange = (event) => {
        // console.log("Text Changed");
        setText(event.target.value);
    }
    const upClickChange = () => {
        // console.log("Upper case btn clicked");
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }
    const lwClickChange = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }
    const clearClickChange = () => {
        setText("");
    }
    return (
        <>
            <div className="container">
                <h1 className="font-weight-bold"><b>{props.heading}</b></h1>


                {/* <iframe width="560" height="315" src="https://mdbootstrap.com/api/snippets/embed/3298640/fullscreen" frameBorder="0" onChange={props.chngMode} ></iframe> */}

                <div className='form-group'>

                <textarea className="form-control" style={{ minWidth: '100%', backgroundColor: props.mode, color: props.mode === 'black' ? 'white' : 'black' }} className="text-center my-1 textAreaStyle" onChange={textOnChange} value={text} rows='15'></textarea>
                </div>
                {/* <textarea class="form-control" style={{minWidth: '100%'}} rows='15' ></textarea> */}

                <br />

                <div className="container">
                <button className="btn btn-primary mx-2 my-1" onClick={upClickChange}>UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={lwClickChange}>LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={clearClickChange}>Clear</button>
                </div>

                <h2 className="font-weight-bold my-1"><b> Additional Data</b></h2>
                <p>Total words : {text.split(" ").length} and Total Characters : {text.length}</p>
                <h2 className="font-weight-bold my-1"><b> Preview</b></h2>
                <p>{text}</p>

                <h2 className="font-weight-bold my-1"><b> Time required to read the text</b></h2>
                <p>{(text.length * 3.8) / 500} mins </p><p> <b> or</b> </p><p>{(60 * ((text.length * 3.8) / 500))} secs</p>





            </div>
        </>
    )
}
