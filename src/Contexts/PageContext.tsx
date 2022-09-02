import React, { createContext, useState } from 'react';

type PageContextProviderProps = {
	children: React.ReactNode;
};
export interface TaskType {
	key?: number | string;
	progress?: number;
	tasks?: string[];
	title?: string;
	deadLine?: string;
	finished?: boolean;
}
export interface FavTask{
	title: string,
	value: boolean
}
const PageContext = createContext<any>({});

export const PageProvider = ({ children }: PageContextProviderProps) => {
	const [page, setPage] = useState(1);
	const [data, setData] = useState<TaskType>({});
	const [latestTask, setLatestTask] = useState<TaskType>({})
	const [allTasks, setAllTasks] = useState<Array<TaskType>>([
		{
			key: 'cleaning',
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
				allTasks,
				setAllTasks,
				latestTask,
				setLatestTask
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContext;
