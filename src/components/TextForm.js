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
            backgroundColor: props.mode === "light" ? "white" : "gray",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          value={text}
          rows="9"
          placeholder="Enter text here"
        ></textarea>
        <button className="btn btn-primary mx-2 my-1 shadow p-2 rounded" onClick={ConvertToUp}>
          ChangeToUpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={ConvertToLo}>
          ChangeToLowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={Clear}>
          Clear
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={CopyText}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={ExtraSpace}>
          Remove Extra Space
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
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.08 * text.split(" ").length} minutes read</p>

        <h3>
          <b> Preview</b>{" "}
        </h3>
        <p>{text}</p>
      </div>
    </>
  );
}
