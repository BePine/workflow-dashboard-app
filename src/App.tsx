import React, { ReactPropTypes, useContext, useEffect, useState } from 'react';
import './Assets/App.css';
import Main from './Pages/Home/Main';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import AppPage from './Pages/AppPage/AppPage';
import { PageProvider } from './Contexts/PageContext';

function App() {
	return (
	<PageProvider>
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/authentication' element={<LoginPage />} />
				<Route path='/app' element={<AppPage />} />
			</Routes>
		</div>
	</PageProvider>
		
	);
}

export default App;
