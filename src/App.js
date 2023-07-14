
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('text-dark')
  const [Enable, setEnable] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const removeclass = () => {
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")

  }
  const toggleMode = (cls) => {
    // console.log(cls)
    removeclass()
    document.body.classList.add("bg-" + cls)
    showalert(`${cls} mode is enabled`, "success")


  }
  const changeIt = () => {

    if (mode === "light") {
      setMode("dark")
      setText("text-light")
      setEnable("Enable Light Mode")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"



    }
    else {
      setMode("light")
      setText("text-dark")
      setEnable("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      // showalert(alert.msg="light mode is enabled",alert.type="success")
      // showalert(`${cls} mode is enabled`,"success")
    }
  }

  return (
    <>
      <Router basename='/text-Utils'>
        <Navbar title="TextUtils" Abouttext="About" mode={mode} toggleMode={toggleMode} text={text} Enable={Enable} />
        <Alert alert={alert} />
        <div className="container my-2">

          <Routes>
            <Route exact path="/about" element={<About changeIt={changeIt} mode={mode} Enable={Enable} />}>

            </Route>
            <Route exact path="/" element={<TextForm heading="Enter the Text to Perform Action" showalert={showalert} />}>


            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
