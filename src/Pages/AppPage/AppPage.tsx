import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { PageProvider } from '../../Contexts/PageContext';
import { auth } from '../../lib/Firebase';
import AppNavbar from './AppNavbar';
import './appWindow.css'
const AppPage = () => {
	const navigate = useNavigate();
	
	return (
		<>
			<Header />
				<div className='appContainer' data-testid='appPageTest'>
					<AppNavbar/>
				</div>
			<Footer />
		</>
	);
};
export default AppPage;
