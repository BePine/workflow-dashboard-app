import { PropsWithChildren } from "react"
import BookMarkPage from "./AppPages/BookMarkPage";
import BookPage from "./AppPages/BookPage";
import HomePage from "./AppPages/HomePage";
import SettingsPage from "./AppPages/SettingsPage";
interface Props{
    page: 1 | 2 | 3 | 4;
}

const AppContent = (props:PropsWithChildren<Props>) => {

    return(
        <>
            {props.page===1?<HomePage/> : null}
            {props.page===2?<BookPage/> : null}
            {props.page===3?<BookMarkPage/> : null}
            {props.page===4?<SettingsPage/> : null}

        </>
    )
}
export default AppContent