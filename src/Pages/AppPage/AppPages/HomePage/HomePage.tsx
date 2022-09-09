import { doc, setDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import PageContext, { TaskType } from '../../../../Contexts/PageContext';
import { db, getDocument, setDocument } from '../../../../lib/Firebase';
import './homePage.css';
const HomePage = () => {
	const profileImageUrl = require('../../../../Assets/Images/icons8-test-account-50.png');
	const {
		taskClicked,
		setTaskClicked,
		lineThroughStyle,
		setLineThroughStyle,
		setPage,
		setData,
		allTasks,
		setAllTasks,
		latestTask,
		displayedName,
		setDisplayedName,
		setColoredTiles,
		coloredTiles,
	} = useContext(PageContext);

	const handleClick = (object: TaskType) => {
		setPage(12);
		setData(object);
	};
	const handleNewTaskClick = () => {
		setPage(11);
	};
	const handleLoad = async () => {
		const value = await getDocument();
		setAllTasks(value?.data);

		if (value?.displayedName === undefined) {
			setDisplayedName('guest');
		} else {
			setDisplayedName(value?.displayedName);
		}
		if (value?.tiles !== undefined) {
			setColoredTiles(value?.tiles);
		} else {
			console.log('tiles not set yet');
		}
		if (value?.lineThrough !== undefined) {
			setLineThroughStyle(value?.lineThrough);
		} else {
		}
		if (value?.tasksClicked !== undefined) {
			setTaskClicked(value?.tasksClicked);
		} else {
		}
	};
	const handleSave = async () => {
		await setDocument(allTasks, displayedName, coloredTiles, lineThroughStyle, taskClicked);
	};
	return (
		<>
			<div className='appContent' data-testid = "homePageTest">
				<h1>Hi, {displayedName}</h1>
				<img src={profileImageUrl} alt='' />
				<h5>Have a good day!</h5>
				<h3>My tasks</h3>
				<div className='tasksContainer'>
					{allTasks?.map(
						(
							{ progress, title, tasks, finished, deadLine }: TaskType,
							index: number
						) => (
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
						)
					)}
					<div className='activeTasks newTask' onClick={handleNewTaskClick}>
						<p>new</p>
						<div className='circle'>
							<button>+</button>
						</div>
					</div>
				</div>
				<h3>Latest Project</h3>
				{latestTask === undefined ? (
					<div className='latestTask--unactive'>no latest projects</div>
				) : (
					<div className='latestTask' onClick={() => handleClick(latestTask)}>
						<div></div>
						{latestTask?.title}
					</div>
				)}
				<button className='tempButton' onClick={handleSave}>
					save data
				</button>
				<br></br>
				<button className='tempButton' onClick={handleLoad}>
					load data
				</button>
			</div>
		</>
	);
};

export default HomePage;
