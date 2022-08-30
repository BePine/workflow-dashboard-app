import { ifError } from "assert";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import PageContext, { TaskType } from "../../../../Contexts/PageContext";

const NewTaskPage = () => {
	const {page, setPage, setTasks} = useContext(PageContext)
	const [inputTitle, setInputTitle] = useState("")
	const [sendData, setSendData] = useState<TaskType>({});
    const handleBackClick = () => {
		setPage(1)
	};
	const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
		setInputTitle(e.target.value)
		setSendData({title: e.target.value})
		


	}
	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setTasks((current:Array<TaskType>)=>[...current, sendData])
		setInputTitle("")
		setPage(1)
		
	}
	return (
		<div>
			<div className='goBack' onClick={handleBackClick}>
				back
			</div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="New task group title" value={inputTitle} onChange={handleChange} required/>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
};
export default NewTaskPage;
