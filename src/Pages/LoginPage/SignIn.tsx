import { FormEvent, useContext, useState } from 'react';
import React from 'react';
import { auth } from '../../lib/Firebase';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import PageContext from '../../Contexts/PageContext';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginCheck, setLoginCheck] = useState<boolean | undefined>();
	const {setLoading, loading} = useContext(PageContext)
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
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				

				// ...
			})
			
			.catch(function (error) {
				console.log(error.message)
				alert('wrong password or email')
			});
		setPassword('');
		setEmail('');
	};
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			setLoginCheck(true);
			setLoading(true)
			setTimeout(() => {
				navigate('../App');
				setLoading(false)
			}, 1000);


			// ...
		} else {
			// User is signed out
			// ...
			setLoginCheck(false);
			
		}
	});
	return (
		<>
			{loginCheck ? (
				null
			) : (
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
				<button data-testid="loginButton" type='submit'>login</button>
			</form>
			)}
		</>
	);
};

export default SignIn;
