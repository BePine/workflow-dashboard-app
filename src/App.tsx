import React, { ReactPropTypes, useEffect, useState } from 'react';
import './Assets/App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Pages/Home/Intro';
import Main from './Pages/Home/Main';

function App() {
  const [show, setShow] = useState<"block"|"none">("block")
  const [visible, setVisible] = useState<1|0>(1)
  

  useEffect(()=>{
    setTimeout(() => {
      setVisible(0)
      setTimeout(() => {
        setShow("none")
      },500);
    },2500);
  },[])
  return (
    <div className="App">
      <Intro display={show} opacity={visible}/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
