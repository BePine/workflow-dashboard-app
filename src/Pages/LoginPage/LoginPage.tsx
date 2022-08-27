import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

const WorkflowApp = () => {
	const [choice, setChoice] = useState<number>(2);
	const handleClickLogin = () => {
		setChoice(2);
	};
	const handleClickRegister = () => {
		setChoice(1);
	};
	return (
		<>
			<Header />
			<div className='loginRegister'>
				Please choose option:
				{choice === 1 ? (
					<div className='loginContainer'>
						<SignIn />
						Don't have account yet?<button onClick={handleClickLogin}>register</button>

					</div>
				) : null}
				{choice === 2 ? (
					<div className='registerContainer'>
						<SignUp />
						already registered?<button onClick={handleClickRegister}>log in</button>

					</div>
				) : null}
			</div>
			<div className='appContainer'></div>
			<Footer />
		</>
	);
};
export default WorkflowApp;
