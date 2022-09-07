// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getDoc, getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
	apiKey: 'AIzaSyCRp-FvldqmyvSyWYZE4iJkG1IVsyW_XPw',
	authDomain: 'workflow-app-907ce.firebaseapp.com',
	projectId: 'workflow-app-907ce',
	storageBucket: 'workflow-app-907ce.appspot.com',
	messagingSenderId: '322426209155',
	appId: '1:322426209155:web:fb2aab974183eff132acb6',
	measurementId: 'G-Q9X0PEBHWK',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const cityRef = doc(db, 'cities', 'BJ');

const analytics = getAnalytics(app);

const auth = getAuth(app);

export const setDocument = (
	allTasks: any,
	name: string,
	coloredTiles: string,
	line: any,
  	clickedTasks: any
) => {
	const uid: any = auth.currentUser?.uid;
	const userRef = doc(db, 'users', uid);
	setDoc(
		userRef,
		{
			data: allTasks,
			displayedName: name,
			tiles: coloredTiles,
			lineThrough: line,
      		tasksClicked: clickedTasks,
      
		},
		{ merge: true }
	);
};
export const getDocument = async () => {
	const uid: any = auth.currentUser?.uid;
	const userRef = doc(db, 'users', uid);
	const docSnap = await getDoc(userRef);
	if (docSnap.exists()) {
		let value = docSnap.data();
		return value;
	} else {
		console.log('you don t have any data saved for this account');
	}
};
export { auth };
