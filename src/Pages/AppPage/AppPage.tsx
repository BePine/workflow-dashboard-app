import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const AppPage = () => {
	const navigate = useNavigate();
	const isLoggedIn = getAuth();
	console.log(isLoggedIn);
	return (
		<>
			<Header />
			<div className='appContainer'></div>
			<Footer />
		</>
	);
};
export default AppPage;
