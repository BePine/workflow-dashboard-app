import { PropsWithChildren } from "react"
import BookMarkPage from "./AppPages/BookMarkPage";
import BookPage from "./AppPages/BookPage";
import HomePage from "./AppPages/HomePage/HomePage";
import NewTaskPage from "./AppPages/HomePage/NewTaskPage";
import TaskPage from "./AppPages/HomePage/TaskPage";
import SettingsPage from "./AppPages/SettingsPage";
interface Props{
    page: number;
}

const AppContent = (props:PropsWithChildren<Props>) => {

    return(
        <>
            {props.page===1?<HomePage/> : null}
            {props.page===2?<BookPage/> : null}
            {props.page===3?<BookMarkPage/> : null}
            {props.page===4?<SettingsPage/> : null}
            {props.page===11? <NewTaskPage/> : null}
            {props.page===12? <TaskPage/> : null}

        </>
    )
}
export default AppContent