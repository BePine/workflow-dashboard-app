import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../lib/Firebase';
import './navbar.css'

const Navbar = () => {
	const [headerChange, setHeaderChange] = useState<boolean>(false);
	const [profileShow, setProfileShow] = useState<boolean>(false);
	const [triangleShow, setTriangleShow] = useState<boolean>(false)
	const linkArr = [
		{ label: 'Home', link: '/' },
		{ label: 'App', link: '/app' },
		{
			label: headerChange ? 'Logout' : 'Login',
			link: headerChange ? '/' : '/authentication',
		},
		
	];
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
	
	const handleTriangleClick = () => {
		if(triangleShow){
			// e.currentTarget.style.transform = 'rotate(0deg)'
			setTriangleShow(false)
		}
		else{
			// console.log('wywloalles')
			// // e.currentTarget.style.transform = 'rotate(90deg)'
			setTriangleShow(true)
		}
	}
	return (
		<>
			<ul role='list'>
				{linkArr.map(({ label, link }) =>
					headerChange === true && label == 'Logout' ? (
						<li key='label'>
							<button onClick={handleClick}>{label}</button>
						</li>
							// <div className='triangle' onClick={handleTriangleClick}></div>
							/* {triangleShow? <button onClick={handleClick}>{label}</button> :null} */
						
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
