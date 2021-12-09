import React, { useState } from "react";
import copy from "copy-to-clipboard";
export default function TextForm(props) {
  const ConvertToUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const ConvertToLo = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const CopyText = () => {
    var text = document.getElementById("box");
    text.select();
    copy(text.value);
  };
  const ExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const Clear = () => {
    const newText = "";
    setText(newText);
  };
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('box').value],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }

  const [text, setText] = useState("");
  //   const text1 = setText(text);

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          id="box"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#8080805e",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          value={text}
          rows="9"
          placeholder="Enter text here"
        ></textarea>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={ConvertToUp}>
          ChangeToUpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={ConvertToLo}>
          ChangeToLowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={Clear}>
          Clear
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={CopyText}>
          Copy Text
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={ExtraSpace}>
          Remove Extra Space
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={downloadTxtFile}>
          Download text
        </button>
      </div>

      <div
        className="container contain"
        
        style={{
          color: props.mode === "dark" ? "white" : "black",
          borderRadius: '5px',
          backgroundColor:
            props.mode === "light" ? "white" : "#000000b9",
        }}
      >
        <h2>
          {" "}
          <b> Your summary is here </b>
          </h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>

        <h3>
          <b> Preview</b>{" "}
        </h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}