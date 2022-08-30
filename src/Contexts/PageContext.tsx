import React, { createContext, useState } from 'react';

type PageContextProviderProps = {
	children: React.ReactNode;
};
export interface TaskType {
	key?: number;
	progress?: number;
	tasks?: string[];
	title?: string;
	deadLine?: string;
	finished?: boolean;
}

const PageContext = createContext<any>({});

export const PageProvider = ({ children }: PageContextProviderProps) => {
	const [page, setPage] = useState(1);
	const [data, setData] = useState<TaskType>({});
	const [newTask, setNewTask] = useState<TaskType>({});
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{
			progress: 0,
			title: 'cleaning',
			tasks: ['clean windows', 'fuck'],
			deadLine: '21/7/2023',
			finished: false,
		}
	]);
	return (
		<PageContext.Provider
			value={{
				page,
				setPage,
				data,
				setData,
				tasks,
				setTasks,
				newTask,
				setNewTask,

			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContext;
