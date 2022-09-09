import { PropsWithChildren } from "react"
import BookPage from "./AppPages/BookPage/BookPage";
import HomePage from "./AppPages/HomePage/HomePage";
import NewTaskPage from "./AppPages/HomePage/NewTaskPage";
import TaskPage from "./AppPages/HomePage/TaskPage";
import SettingsPage from "./AppPages/SettingsPage/SettingsPage";
interface Props{
    page: number;
}

const AppContent = (props:PropsWithChildren<Props>) => {

    return(
        <div data-testid='appContentTest'>
            {props.page===1?<HomePage /> : null}
            {props.page===2?<BookPage/> : null}
            {props.page===3?<SettingsPage/> : null}
            {props.page===11? <NewTaskPage/> : null}
            {props.page===12? <TaskPage/> : null}

        </div>
    )
}
export default AppContent