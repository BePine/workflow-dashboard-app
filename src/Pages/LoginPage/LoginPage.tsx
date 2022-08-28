import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LoginPage = () => {
	const [choice, setChoice] = useState<number>(2);
	const handleClickLogin = () => {
		setChoice(1);
	};
	const handleClickRegister = () => {
		setChoice(2);
	};
	return (
		<>
			<Header />
			<div className='authContainer' role="main">
				{choice === 2 ? (
					<div className='loginContainer' data-testid="loginCont">
						<p>In case to use our app you must log in first</p><br></br>
						<SignIn />
						<p>Don't have account yet?</p>
						<button className="hrefStyleOnly" onClick={handleClickLogin}>register</button>
					</div>
				) : null}
				{choice === 1 ? (
					<div className='loginContainer' data-testid="regCont">
						<p>In case to use our app you must register first</p><br></br>
						<SignUp />
						<p>already registered?</p>
						<button className="hrefStyleOnly" onClick={handleClickRegister}>login</button>
					</div>
				) : null}
			</div>
			<Footer />
		</>
	);
};
export default LoginPage;
