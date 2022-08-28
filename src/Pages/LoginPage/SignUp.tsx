import { useState } from 'react';
import React from 'react';
import { auth } from '../../lib/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
	const [email, setEmail] = useState('');
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
				console.log(user);
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
					type='email'
					onChange={handleChange}
					placeholder='e-mail'
					value={email}
					required
				/>
				<input
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
