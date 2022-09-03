import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import PageContext, { FavTask, TaskType } from "../../../../Contexts/PageContext"
import './taskPage.css'
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
            <div className='taskContent'>
					<div className='goBack' onClick={handleBackClick}>
						back
					</div>
                    <div className="deleteGroup" onClick={handleDeleteClick}>delete</div>
					<div className="taskTitle">{data?.title}</div> 
                    <div className="tasks"><span>tasks:</span>{data.tasks?.map((task:string[], index:number)=><div className="task" key={index}>{task}</div>)}</div>
				</div>
        </>
    )
}
export default TaskPage