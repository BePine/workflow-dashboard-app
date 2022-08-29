import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../lib/Firebase';

const Navbar = () => {
	const [headerChange, setHeaderChange] = useState<boolean>(false);
	const [profileShow, setProfileShow] = useState<boolean>(false);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			setHeaderChange(true);
			setProfileShow(true);
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
	const handleClick = () => {
		signOut(auth)
			.then(() => {
				setHeaderChange(false);
				setProfileShow(false);
			})
			.catch((error) => {
				// An error happened.
			});
	};
	const linkArr = [
		{ label: 'Home', link: '/' },
		{ label: 'App', link: '/app' },
		{
			label: headerChange ? 'Logout' : 'Login',
			link: headerChange ? '/' : '/authentication',
		},
		
	];
	return (
		<>
			<ul role='list'>
				{linkArr.map(({ label, link }) =>
					headerChange === true && label == 'Logout' ? (
						<li key='label'>
							<button onClick={handleClick}>{label}</button>
						</li>
					) : (
						<li key={label}>
							<Link to={link}>{label}</Link>
						</li>
					)
				)}

				{profileShow ? (
					<img
						src={require('../../Assets/Images/icons8-test-account-50.png')}
						alt=''
					/>
				) : null}
			</ul>
		</>
	);
};

export default Navbar;
