import React, { useEffect, useState } from 'react';
import './Assets/App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Pages/Home/Intro';

function App() {
  const [show, setShow] = useState<"block"|"none">("block")
  useEffect(()=>{
    setTimeout(() => {
      setShow("none")
    },4000);
  },[])
  return (
    <div className="App">
      <Intro display={show}/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
