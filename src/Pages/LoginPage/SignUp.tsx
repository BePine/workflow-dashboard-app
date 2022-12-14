import { useContext, useState } from 'react';
import React from 'react';
import { auth } from '../../lib/Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import PageContext from '../../Contexts/PageContext';
import AuthContext from '../../Contexts/AuthContext';
const SignUp = () => {
	const [email, setEmail] = useState('');
	const { setLoading } = useContext(PageContext);
	const { setLoggedIn } = useContext(AuthContext);
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.type === 'email') {
			setEmail(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				// setLoggedIn(true)
				
				// ...
			})
			.catch((error) => console.log(error.message));
		setPassword('');
		setEmail('');
	};
	
	return (
		<>
			<form role="form" onSubmit={handleSubmit}>
				<input
					title="email must contain extension after domain E.g. '.com'"
					pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9-]+\.[a-z]{2,}"
					type='email'
					onChange={handleChange}
					placeholder='e-mail'
					value={email}
					required
				/>
				<input
					title="Password must have at least 8 letters and can't contain symbols"
					pattern="[A-Za-z0-9]{8,}"
					type='password'
					onChange={handleChange}
					placeholder='password'
					value={password}
					required
				/>
				<button type='submit'>Register</button>
			</form>
		</>
	);
};

export default SignUp;
