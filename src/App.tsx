import React, { ReactPropTypes, useContext, useEffect, useState } from 'react';
import './Assets/App.css';
import Main from './Pages/Home/Main';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import AppPage from './Pages/AppPage/AppPage';


function App() {
  
  return (
    <div className="App">
        
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/authentication" element={<LoginPage/>}/>
            <Route path="/app" element={<AppPage/>}/>

          </Routes>
       
    </div>
  );
}

export default App;
