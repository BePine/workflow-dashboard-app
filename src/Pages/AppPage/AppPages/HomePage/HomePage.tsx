import { useContext, useEffect, useState } from 'react';
import PageContext, { TaskType } from '../../../../Contexts/PageContext';

const HomePage = () => {
	const profileImageUrl = require('../../../../Assets/Images/icons8-test-account-50.png');
	const { setPage, setData, allTasks, setAllTasks } = useContext(PageContext);
	
	const handleClick = (object: TaskType) => {
		setPage(12);
		console.log(object)
		setData(object);
	};
	const handleNewTaskClick = () => {
		setPage(11);
	};
	console.log(allTasks);
	return (
		<>
			<div className='appContent'>
				<h1>Hi, guest!</h1>
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
			</div>
		</>
	);
};

export default HomePage;
