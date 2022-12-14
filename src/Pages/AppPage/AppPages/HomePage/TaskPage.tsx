import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import PageContext, {
	CalendarStringType,
	FavTask,
	TaskType,
} from '../../../../Contexts/PageContext';
import './taskPage.css';
const TaskPage = () => {
	const {
		setPage,
		data,
		setData,
		allTasks,
		setAllTasks,
		taskClicked,
		lineThroughStyle,
	} = useContext(PageContext);
	const newTemp:any = taskClicked[data.title]
	useEffect(() => {
		console.log(allTasks);
	}, [allTasks]);
	
	const handleBackClick = () => {
		setPage(1);
	};
	const handleDeleteClick = () => {
		setAllTasks(allTasks.filter((item: TaskType) => item.title != data.title));
		setPage(1);
	};
	const handleTaskClickFirst = async (e: any, taskIndex: any) => {
		const temp = allTasks.filter((task: TaskType) => task.title !== data.title);
		data.progress = data.progress + 1;
		setAllTasks([...temp, data]);
		taskClicked[data.title]={[taskIndex]: true};
		lineThroughStyle[data.title] = {[taskIndex]: 'line-through'};
		// console.log(taskClicked)
		
		
		// console.log(taskIndex)
	};
	const handleTaskClickSecond = async (e: any, taskIndex: any) => {
		const temp = allTasks.filter((task: TaskType) => task.title !== data.title);
		data.progress = data.progress - 1;
		setAllTasks([...temp, data]);
		taskClicked[data.title] = {[taskIndex]: false};
		lineThroughStyle[data.title] = {[taskIndex]:''};
		
	};	
	if(taskClicked[data.title[0]]==undefined){
		taskClicked[data.title] = {[0]: false}
	}
	return (
		<>
			<div className='taskContent' data-testid='taskPageTest'>
				<div className='goBack' onClick={handleBackClick}>
					back
				</div>
				<div className='deleteGroup' onClick={handleDeleteClick}>
					delete
				</div>
				<div className='taskTitle'>{data?.title}</div>
				<div className='tasks'>
					<span>tasks:</span>
					{data.tasks?.map((task: string[], index: number) => (
						<div
							style={{ textDecoration: lineThroughStyle[data.title[index]] }}
							onClick={
								taskClicked[data.title[index]] == undefined
								? ()=>{	taskClicked[data.title] = {[index]: false}}
								: newTemp[index]!==false?(e:any) => handleTaskClickFirst(e, index) :(e) => handleTaskClickSecond(e, index)}
								
													
							
							className='task'
							key={index}
						>
							{task}
						</div>
					))}
				</div>
				<span className='progressText'>
					Progress: {data.progress}/{data.tasks.length}
				</span>
				<div className='progressBar--empty'>
					<div
						className='progressBar--fill'
						style={{ width: (data.progress / data.tasks.length) * 100 + '%' }}
					></div>
				</div>
			</div>
		</>
	);
};
export default TaskPage;
