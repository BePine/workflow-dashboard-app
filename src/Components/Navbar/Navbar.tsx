import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../lib/Firebase';

const Navbar = () => {
	const [headerChange, setHeaderChange] = useState<true | false>(true);
    
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			setHeaderChange(false);
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
	const linkArr = [
		{ label: 'Home', link: '/' },
		{
			label: headerChange ? 'Login' : 'Logout',
			link: headerChange ? '/authentication' : '/',
		},
		{ label: 'App', link: '/app' },
	];
    const handleClick = () => {
        signOut(auth).then(() => {
			setHeaderChange(true);
          }).catch((error) => {
            // An error happened.
          });
    }
	return (
		<>
			<ul>
				{linkArr.map(({ label, link }) => (
					<li key={label}>
						{headerChange === false ? (
							label === 'Logout' ? (
								<button onClick={handleClick}>{label}</button>
							) : (
								<Link to={link}>{label}</Link>
							)
						) : (
                            <Link to={link}>{label}</Link>
						)}
					</li>
				))}
			</ul>
		</>
	);
};

export default Navbar;
