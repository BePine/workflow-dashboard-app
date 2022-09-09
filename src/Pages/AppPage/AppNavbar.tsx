import { useContext, useState } from 'react';
import PageContext from '../../Contexts/PageContext'
import AppContent from './AppContent';
const nonActiveLinkStyles = { backgroundColor: 'white', flex: 2 };
const activeLinkStyles = { backgroundColor: 'lightcoral', flex: 3 };
const AppNavbar = () => {
	const {page, setPage} = useContext(PageContext)
	const [activeLink, setActiveLink] = useState('home');
	const handleClickHome = () => {
		setActiveLink('home');
		setPage(1);
	};
	const handleClickBook = () => {
		setActiveLink('book');
		setPage(2);
	};
	const handleClickSettings = () => {
		setActiveLink('settings');
		setPage(3);
	};
	return (
		<>
			<div className='appNav' data-testid='appNavbarTest'>
				<button
					onClick={handleClickHome}
					style={activeLink === 'home' ? activeLinkStyles : nonActiveLinkStyles}
				>
					<img src={require('../../Assets/Images/icons8-home-50.png')} alt='' />
				</button>
				<button
					onClick={handleClickBook}
					style={activeLink === 'book' ? activeLinkStyles : nonActiveLinkStyles}
				>
					<img src={require('../../Assets/Images/icons8-book-50.png')} alt='' />
				</button>
				<button
					onClick={handleClickSettings}
					style={
						activeLink === 'settings' ? activeLinkStyles : nonActiveLinkStyles
					}
				>
					<img
						src={require('../../Assets/Images/icons8-settings-50.png')}
						alt=''
					/>
				</button>
			</div>
			<div className='AppArea'>
				<AppContent page={page} />
			</div>
		</>
	);
};
export default AppNavbar;
