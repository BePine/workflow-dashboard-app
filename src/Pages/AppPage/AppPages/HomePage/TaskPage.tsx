import { ChangeEvent, FormEvent, useContext, useState } from "react"
import PageContext, { TaskType } from "../../../../Contexts/PageContext"

const TaskPage = () => {
	const {setPage, data,favTask, setFavTask, setClickFavSwitch, clickFavSwitch} = useContext(PageContext)
    const handleBackClick = () => {
        setPage(1)
    }
    const handleFavouriteClick = () => {
        if(clickFavSwitch){
            const temp = favTask.filter((task:TaskType)=>{return task.title?.includes(data.title)})
            setFavTask()
            setClickFavSwitch(false)
        }
        else{
            if(favTask===undefined){
            setFavTask([data])
            }
            else{
                setFavTask([...favTask, data])
            }
            setClickFavSwitch(true)
        }
    }
    return(
        <>
            <div className='appContent'>
					<div className='goBack' onClick={handleBackClick}>
						back
					</div>
                    <div onClick={handleFavouriteClick}>favourite</div>
					<div>{data?.title}</div>
                    <div>{data.tasks?.map((task:string[], index:number)=><div key={index}>{task}</div>)}</div>
				</div>
        </>
    )
}
export default TaskPage