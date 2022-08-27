import { useState } from 'react';
import React from "react";
import { auth } from "../../lib/Firebase";
import {signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.type === 'email') {
			setEmail(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log('signed in')

				// ...
			})
			.catch(error => console.log(error.message));
		setPassword('');
		setEmail('');
	};
	
	
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					onChange={handleChange}
					placeholder='e-mail'
					value={email}
				/>
				<input
					type='password'
					onChange={handleChange}
					placeholder='password'
					value={password}
                    required
				/>
				<button type='submit'>Login</button>
			</form>
		</>
	);
};

export default SignIn;
