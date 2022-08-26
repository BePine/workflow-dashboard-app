import { useState } from 'react';
import { handleRegisterAuth } from '../../lib/Login';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [data, setData] = useState<{email: string,password:string}>({email:"", password:""})
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.type === 'email') {
			setEmail(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setData({email: email, password: password})
		handleRegisterAuth({email: email, password:password})
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
