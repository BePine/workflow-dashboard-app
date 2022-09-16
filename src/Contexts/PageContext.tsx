import React, { createContext, useState } from 'react';

type PageContextProviderProps = {
	children: React.ReactNode;
};
export interface ArrOfTasksType {
	name?: string,
	clicked?: boolean
}
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
export interface CalendarStringType{
	1?: string, 2?: string, 3? : string, 4? : string, 5?: string, 6?: string, 7?: string, 8?: string,
	9?: string,10?: string,11?: string,12?: string,13?: string,14?: string,15?: string,16?: string,17?: string,
	18?: string,19?: string,20?: string,21?: string,22?: string,23?: string,24?: string,25?: string,26?: string,
	27?: string,28?: string,29?: string,30?: string,31?: string,
	
}

const PageContext = createContext<any>({});

export const PageProvider = ({ children }: PageContextProviderProps) => {
	const [page, setPage] = useState(1);
	const [data, setData] = useState<TaskType>({});
	const [latestTask, setLatestTask] = useState<TaskType>()
	const [displayedName, setDisplayedName] = useState('guest')
	const [coloredTiles, setColoredTiles] = useState<CalendarStringType>({})
	const [titleForTiles, setTitleForTiles] = useState<CalendarStringType>({})
	const [loading, setLoading] = useState<boolean>(false)
    const [taskClicked, setTaskClicked] = useState<any>({})
    // const [lineThroughStyle, setLineThroughStyle] = useState<any>({})
	const [allTasks, setAllTasks] = useState<Array<TaskType>>([
		{
			key: 'cleaning',
			progress: 0,
			title: 'cleaning',
			tasks: ['clean windows', 'crap',],
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
				setLatestTask,
				displayedName,
				setDisplayedName,
				coloredTiles,
				setColoredTiles,
				loading,
				setLoading,
				titleForTiles,
				setTitleForTiles,
				taskClicked,
				setTaskClicked,
				// lineThroughStyle, 
				// setLineThroughStyle

			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContext;
