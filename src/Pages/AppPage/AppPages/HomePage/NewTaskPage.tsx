import { ifError } from 'assert';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import PageContext, { TaskType } from '../../../../Contexts/PageContext';
import { setDocument } from '../../../../lib/Firebase';

const NewTaskPage = () => {
	const { page, setPage, setAllTasks, setLatestTask } = useContext(PageContext);
	const [inputTitle, setInputTitle] = useState('');
	const [inputTask, setInputTask] = useState('');
	const [tasks, setTasks] = useState<string[]>([]);
	const [sendData, setSendData] = useState<TaskType>({});
	const handleBackClick = () => {
		setPage(1);
	};
	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTitle(e.target.value);
		setSendData({ title: e.target.value, key: e.target.value, tasks: tasks });
	};
	const handleChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTask(e.target.value);
	};

	const handleDeleteClick = (toDelete: string) => {
		setTasks(tasks.filter((task) => task != toDelete));
	};
	const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTasks([...tasks, inputTask]);
		setInputTask('');
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAllTasks((current: Array<TaskType>) => [...current, sendData]);
		setInputTitle('');
		setPage(1);
		setLatestTask(sendData)
		// setDocument((current: any)=>[...current, sendData])
	};

	return (
		<div>
			<div className='goBack' onClick={handleBackClick}>
				back
			</div>
			<form onSubmit={handleSubmitCreate}>
				<input
					type='text'
					placeholder='task to add'
					value={inputTask}
					onChange={handleChangeTask}
				/>
				<button type="submit">new task</button>
			</form>
			tasks:
			{tasks?.map((task, index) => (
				<div key={index}>
					{task}
					<div onClick={() => handleDeleteClick(task)}>x</div>
				</div>
			))}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='New task group title'
					value={inputTitle}
					onChange={handleChangeTitle}
					required
				/>

				<button type='submit'>Create group</button>
			</form>
		</div>
	);
};
export default NewTaskPage;
