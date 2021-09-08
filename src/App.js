
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light');
const toggleMode = () =>{
  if(mode === 'light')
  {
    setmode('dark');
    document.body.style.backgroundColor = '#242326db';
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
    </>
  );
}

export default App;