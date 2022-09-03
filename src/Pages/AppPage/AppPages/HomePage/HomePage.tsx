import { doc, setDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import PageContext, { TaskType } from '../../../../Contexts/PageContext';
import { db, getDocument, setDocument } from '../../../../lib/Firebase';
import './homePage.css'
const HomePage = () => {
	const profileImageUrl = require('../../../../Assets/Images/icons8-test-account-50.png');
	const { setPage, setData, allTasks, setAllTasks, latestTask, displayedName, setDisplayedName,setColoredTiles, coloredTiles } = useContext(PageContext);
	

	const handleClick = (object: TaskType) => {
		setPage(12);
		console.log(object)
		setData(object);
	};
	const handleNewTaskClick = () => {
		setPage(11);
	};
	const handleLoad = async () =>{
		const value = await getDocument()
		setAllTasks(value?.data)
		
		if(value?.displayedName === undefined){
			setDisplayedName("guest")
		}
		else{
			console.log(value?.displayedName)
			setDisplayedName(value?.displayedName)
		}
		if(value?.tiles!== undefined){
			setColoredTiles(value?.tiles)
		}
		else{
			console.log('tiles not set yet')
		}
	}
	const handleSave = async () =>{
		setDocument(allTasks, displayedName, coloredTiles)

	}
	console.log(allTasks);
	return (
		<>
			<div className='appContent'>
				<h1>Hi, {displayedName}</h1>
				<img src={profileImageUrl} alt='' />
				<h5>Have a good day!</h5>
				<h3>My tasks</h3>
				<div className='tasksContainer'>
					{allTasks?.map(({ progress, title, tasks, finished, deadLine }:TaskType, index:number) => (
						<div
							onClick={() =>
								handleClick({
									progress,
									title,
									tasks,
									finished,
									deadLine,
								})
							}
							className='activeTasks'
							key={index}
						>
							{title}
						</div>
					))}
					<div className='activeTasks newTask' onClick={handleNewTaskClick}>
						<p>new</p>
						<div className='circle'>
							<button>+</button>
						</div>
					</div>
				</div>
				<h3>Latest Project</h3>
				<div onClick={() =>handleClick(latestTask)}>{latestTask?.title}</div>
			    <button onClick={handleSave}>save data</button>
			    <button onClick={handleLoad}>load data</button>

			</div>

		</>
	);
};

export default HomePage;
