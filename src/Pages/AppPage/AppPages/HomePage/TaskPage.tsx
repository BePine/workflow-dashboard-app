import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import PageContext, { FavTask, TaskType } from "../../../../Contexts/PageContext"

const TaskPage = () => {
	const {setPage, data, allTasks, setAllTasks} = useContext(PageContext)
    const handleBackClick = () => {
        setPage(1)
    }
    const handleDeleteClick = () => {
        setAllTasks(allTasks.filter((item:TaskType)=>item.title != data.title))
        setPage(1)
    }
    return(
        <>
            <div className='appContent'>
					<div className='goBack' onClick={handleBackClick}>
						back
					</div>
                    <div onClick={handleDeleteClick}>delete</div>
					<div>{data?.title}</div>
                    <div>{data.tasks?.map((task:string[], index:number)=><div key={index}>{task}</div>)}</div>
				</div>
        </>
    )
}
export default TaskPage