import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
}

const toggleMode = () =>{
  if(mode === 'light')
  {
    setmode('dark');
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled","success");
  }
}

  return (
    <>
    <Router>
      <Navbar title="TextApp" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      {/* <About/> */}
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text below" mode = {mode} />
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;