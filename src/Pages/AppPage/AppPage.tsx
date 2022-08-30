import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { PageProvider } from '../../Contexts/PageContext';
import AppNavbar from './AppNavbar';

const AppPage = () => {
	const navigate = useNavigate();
	
	return (
		<>
			<Header />
			<PageProvider>
				<div className='appContainer'>
						<AppNavbar/>
				</div>
            </PageProvider>
			<Footer />
		</>
	);
};
export default AppPage;
