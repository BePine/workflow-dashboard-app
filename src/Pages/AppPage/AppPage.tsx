import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import AppNavbar from './AppNavbar';

const AppPage = () => {
	const navigate = useNavigate();
	
	return (
		<>
			<Header />
			<div className='appContainer'>
                <AppNavbar/>
            </div>
            <p>All icons used in app are from <a href="https://icons8.com" className="hrefStyleOnly">https://icons8.com</a></p>
			<Footer />
		</>
	);
};
export default AppPage;
