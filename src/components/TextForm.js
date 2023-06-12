import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
   props.showAlert("Converting to uppercase","success");
  };
  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
   props.showAlert("Converting to lowercase","success");

  };
  const handleClearClick = () => {
    
    let newtext = '';
    setText(newtext);
    props.showAlert("Clear text","success");
  };
  const handleCopy = () => { 
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState(""); // usestate with this we intialize text and set text
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'grey':'white'}}>
        <h1>{props.headings}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
             style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to uppercase{" "}
          </button>
          <button className="btn btn-primary mx-1" onClick={handleloClick}>
            Convert to lowercase{" "}
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Cleartext{" "}
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy text{" "}
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
            Extra spaces{" "}
          </button>
        </div>
      </div>
      <div className="conatiner my-3" style={{ color: props.mode === 'dark'?'white' : '#042743' }}>
        <h2> Your text summary </h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p> {0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something inthe textbox above to"}</p>
      </div>
    </>
  );
}
