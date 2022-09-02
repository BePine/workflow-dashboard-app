import { useContext } from "react";
import PageContext, { TaskType } from "../../../Contexts/PageContext";

const BookMarkPage = () => {
	const { favTask } = useContext(PageContext);

	return (
		<>
			<div className='favourites'>
                favourite tasks:
                {favTask?.map((task:TaskType)=><div>{task.title}</div>)}
            </div>
		</>
	);
};

export default BookMarkPage;
