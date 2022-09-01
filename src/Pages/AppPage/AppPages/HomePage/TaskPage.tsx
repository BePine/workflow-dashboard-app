import { ChangeEvent, FormEvent, useContext, useState } from "react"
import PageContext from "../../../../Contexts/PageContext"

const TaskPage = () => {
	const {setPage, data} = useContext(PageContext)
    const handleBackClick = () => {
        setPage(1)
    }

    return(
        <>
            <div className='appContent'>
					<div className='goBack' onClick={handleBackClick}>
						back
					</div>
					<div>{data?.title}</div>
                    <div>{data.tasks?.map((task:string[], index:number)=><div key={index}>{task}</div>)}</div>
				</div>
        </>
    )
}
export default TaskPage