import { FormEvent, useState } from "react";
import AppContent from "./AppContent";

const AppNavbar = () => {
	const [page, setPage] = useState<1 | 2 | 3 | 4>(1)
	const [home, setHome] = useState("lightcoral")
	const [book, setBook] = useState("white")
	const [bookMark, setBookMark] = useState("white")
	const [settings, setSettings] = useState("white")

	const handleClickHome = () => {
		setHome("lightcoral")
		setBook("white")
		setBookMark("white")
		setSettings("white")
		setPage(1)
	}
	const handleClickBook = () => {
		setHome("white")
		setBook("lightcoral")
		setBookMark("white")
		setSettings("white")
		setPage(2)
		
	}
	const handleClickBookMark = () => {
		setHome("white")
		setBook("white")
		setBookMark("lightcoral")
		setSettings("white")
		setPage(3)
		
	}
	const handleClickSettings = () => {
		setHome("white")
		setBook("white")
		setBookMark("white")
		setSettings("lightcoral")
		setPage(4)
		
	}
	return (
		<>
			<div className='appNav'>
				<button onClick={handleClickHome} style={{background: home}}>
					<input type='checkbox' radioGroup='nav' />
					<img src={require('../../Assets/Images/icons8-home-50.png')} alt='' />
				</button>
				<button onClick={handleClickBook} style={{background: book}}>
					<input type='checkbox' radioGroup='nav' />
					<img src={require('../../Assets/Images/icons8-book-50.png')} alt='' />
				</button>
				<button onClick={handleClickBookMark} style={{background: bookMark}}>
					<input type='checkbox' radioGroup='nav' />
					<img
						src={require('../../Assets/Images/icons8-book-mark-50.png')}
						alt=''
					/>
				</button>
				<button onClick={handleClickSettings} style={{background: settings}}> 
					<input type='checkbox' radioGroup='nav' />
					<img
						src={require('../../Assets/Images/icons8-settings-50.png')}
						alt=''
					/>
				</button>
	
			</div>
			<div className="AppArea">
				<AppContent page={page}/>
			</div>
		</>
	);
};
export default AppNavbar;
