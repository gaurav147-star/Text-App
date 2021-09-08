
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from 'react'
// import About from "./components/About";

function App() {
  const [mode, setmode] = useState('light');
const toggleMode = () =>{
  if(mode === 'light')
  {
    setmode('dark');
    document.body.style.backgroundColor = 'rgb(66, 143, 243)';
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';

  }
}

  
  return (
    <>
      <Navbar title="TextApp" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the text below" mode = {mode} />
      {/* <About/> */}
    </>
  );
}

export default App;