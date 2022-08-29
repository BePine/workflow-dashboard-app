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
            
			<Footer />
		</>
	);
};
export default AppPage;
