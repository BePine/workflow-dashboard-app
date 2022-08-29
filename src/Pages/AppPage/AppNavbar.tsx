import { useState } from "react";
import AppContent from "./AppContent";

const AppNavbar = () => {
	const [page, setPage] = useState<1 | 2 | 3 | 4>(1)
	const handleClickHome = () => {
		setPage(1)
	}
	const handleClickBook = () => {
		setPage(2)
		
	}
	const handleClickBookMark = () => {
		setPage(3)
		
	}
	const handleClickSettings = () => {
		setPage(4)
		
	}
	return (
		<div className='appNav'>
			<button onClick={handleClickHome}>
				<input type='checkbox' radioGroup='nav' />
				<img src={require('../../Assets/Images/icons8-home-50.png')} alt='' />
			</button>
			<button onClick={handleClickBook}>
				<input type='checkbox' radioGroup='nav' />
				<img src={require('../../Assets/Images/icons8-book-50.png')} alt='' />
			</button>
			<button onClick={handleClickBookMark}>
				<input type='checkbox' radioGroup='nav' />
				<img
					src={require('../../Assets/Images/icons8-book-mark-50.png')}
					alt=''
				/>
			</button>
			<button onClick={handleClickSettings}> 
				<input type='checkbox' radioGroup='nav' />
				<img
					src={require('../../Assets/Images/icons8-settings-50.png')}
					alt=''
				/>
			</button>
			<AppContent page={page}/>
		</div>
	);
};
export default AppNavbar;
