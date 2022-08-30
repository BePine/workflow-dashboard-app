import { useContext } from "react"
import PageContext from "../../../../Contexts/PageContext"

const TaskPage = () => {
	const {page, setPage, data} = useContext(PageContext)
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
                    <div>{data.tasks?.map((task:string[])=><div>{task}</div>)}</div>
				</div>
        </>
    )
}
export default TaskPage