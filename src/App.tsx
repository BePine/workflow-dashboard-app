import React, { ReactPropTypes, useContext, useEffect, useState } from 'react';
import './Assets/App.css';
import Main from './Pages/Home/Main';
import WorkflowApp from './Pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
        
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/authentication" element={<WorkflowApp/>}/>
          </Routes>
       
    </div>
  );
}

export default App;
