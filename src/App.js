

import './App.css';
//import About from './compnents/About';
import Navbar from './compnents/Navbar';
import React, {useState} from 'react';
import Textform from './compnents/Textform';
import Alert from './compnents/Alert';

function App() {
  const [mode,setMode] = useState('light');  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#34304d';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils-DarkMode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils-LightMode";
    }
  }

  return(
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/> 
    {/* <About/> */}
    
    </div>
    </>
  );
}

export default App;
