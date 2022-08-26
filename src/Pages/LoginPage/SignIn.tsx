import { useState } from 'react';
import { handleLoginAuth } from '../../lib/Login';

const SignIn = () => {
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
		handleLoginAuth({email: email, password:password})
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
