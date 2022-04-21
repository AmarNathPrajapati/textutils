import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')//dark mode enable or not.
  const [alert, setAlert] = useState(null);

  let showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const setDarkMode = () =>{
    if(mode==="dark"){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
      document.title = "TextUtils-Light Mode"
    }else{
      setMode('dark');
      document.body.style.backgroundColor='#210e46';
      showAlert("Dark Mode has been enabled","success")
      document.title = "TextUtils-Dark Mode"
    }
  }
  return (
    // all below line code is JSX, ye html hee hai , mukut javaScript ka hai.
    // jsx ke andar hee andar javaScript use kar sakata hoo.
    <>  
          <Alert alert = {alert}/>
          <Navbar title ="TextUtils" about = "About Us" mode= {mode} darkMode={setDarkMode} />
          <Text heading = "Write Your Text Here " mode= {mode} showAlert={showAlert} />
    </>
  );
}

export default App;
