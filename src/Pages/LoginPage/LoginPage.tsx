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
				
				{choice === 1 ? (
					<div className='loginContainer'>
                        In case to use our app you must log in first<br></br>
						<SignIn />
						Don't have account yet?<button onClick={handleClickLogin}>register</button>

					</div>
				) : null}
				{choice === 2 ? (
					<div className='registerContainer'>
                        In case to use our app you must register first<br></br>
						<SignUp />
						already registered?<button onClick={handleClickRegister}>log in</button>

					</div>
				) : null}
			</div>
			<Footer />
		</>
	);
};
export default WorkflowApp;
